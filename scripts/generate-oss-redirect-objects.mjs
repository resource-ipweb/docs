/**
 * 为每个含 index.html 的目录生成「无尾斜杠」回源对象内容。
 * 部署时上传到 OSS 键：{prefix}/{path}（无扩展名），对应 URL /docs/.../path
 * 不采用 OSS 静态页面时，避免 NoSuchKey。
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function normalizeBaseUrl(raw) {
  let p = (raw || '/').trim();
  if (!p.startsWith('/')) p = `/${p}`;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

const siteUrl = (process.env.SITE_URL || 'https://docs.ipweb.cc').replace(/\/$/, '');
const baseUrl = normalizeBaseUrl(process.env.SITE_BASE_URL || '/');

function collectDirs(dir, base, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (!fs.statSync(full).isDirectory()) continue;
    const indexFile = path.join(full, 'index.html');
    if (fs.existsSync(indexFile)) {
      const rel = path.relative(base, full).replace(/\\/g, '/');
      if (rel) out.push(rel);
    }
    collectDirs(full, base, out);
  }
}

function redirectHtml(targetUrl) {
  const escaped = targetUrl.replace(/"/g, '&quot;');
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${escaped}"><link rel="canonical" href="${escaped}"><script>location.replace("${escaped}")</script></head><body>Redirecting to <a href="${escaped}">${escaped}</a></body></html>`;
}

const outDir = path.join(root, '.oss-redirects');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const dirs = [];
const buildRoot = path.join(root, 'build');
if (fs.existsSync(buildRoot)) {
  collectDirs(buildRoot, buildRoot, dirs);
}

const manifest = [];
for (const rel of dirs) {
  const targetUrl = `${siteUrl}${baseUrl}${rel}/`;
  const localFile = `${rel.replace(/\//g, '__')}.html`;
  manifest.push({ ossKey: rel, targetUrl, localFile });
  fs.writeFileSync(path.join(outDir, localFile), redirectHtml(targetUrl), 'utf8');
}

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Generated ${manifest.length} OSS redirect objects in .oss-redirects/`);
