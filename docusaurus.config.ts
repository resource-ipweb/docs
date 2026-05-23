import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { resolveChannelCode } from './src/utils/ipwebLoginUrl';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** 规范 baseUrl：必须以 / 开头，非根路径时以 / 结尾 */
function normalizeBaseUrl(path: string): string {
  let p = path.trim() || '/';
  if (!p.startsWith('/')) p = `/${p}`;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

/**
 * url 只能是站点根域名（无路径）；子路径写在 baseUrl（或 SITE_BASE_URL）。
 * 若 SITE_URL 误写成 https://example.com/docs-site/，会自动拆成 url + baseUrl。
 */
function resolveSiteUrlAndBaseUrl(): { url: string; baseUrl: string } {
  const raw = process.env.SITE_URL ?? 'https://docs.ipweb.cc';
  const baseUrlEnv = process.env.SITE_BASE_URL?.trim();

  try {
    const parsed = new URL(raw);
    const origin = `${parsed.protocol}//${parsed.host}`;
    const pathFromUrl = parsed.pathname;

    if (baseUrlEnv) {
      return { url: origin, baseUrl: normalizeBaseUrl(baseUrlEnv) };
    }
    if (pathFromUrl && pathFromUrl !== '/') {
      return { url: origin, baseUrl: normalizeBaseUrl(pathFromUrl) };
    }
    return { url: origin, baseUrl: '/' };
  } catch {
    return {
      url: raw.split('/').slice(0, 3).join('/') || raw,
      baseUrl: normalizeBaseUrl(baseUrlEnv ?? '/'),
    };
  }
}

const { url: siteUrl, baseUrl: siteBaseUrl } = resolveSiteUrlAndBaseUrl();

/** 构建时 CHANNEL_CODE；未配置则为 undefined，登录链接不传 channelCode */
const channelCode = resolveChannelCode();

/** 英文 locale 路径：站点在 /docs/ 时应为 /docs/en/，而不是 /en/ */
function getEnLocaleBaseUrl(): string {
  if (siteBaseUrl === '/') {
    return '/en/';
  }
  const base = siteBaseUrl.endsWith('/') ? siteBaseUrl : `${siteBaseUrl}/`;
  return `${base}en/`;
}

const config: Config = {
  title: 'IPWeb API Docs',
  tagline: 'IPWeb API Docs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // SITE_URL=纯域名；子路径用 SITE_BASE_URL（如 /docs-site/），见 resolveSiteUrlAndBaseUrl
  url: siteUrl,
  baseUrl: siteBaseUrl,

  // 新增这一行：开启结尾斜杠
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'resource-ipweb', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  customFields: {
    ...(channelCode ? { channelCode } : {}),
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    // 默认语言 zh 部署在站点根路径，访问域名时无需 /zh/ 前缀
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '中文',
        htmlLang: 'zh-Hans',
        direction: 'ltr',
        // 勿写 baseUrl: '/'，否则会覆盖站点 baseUrl，导致 /docs/ 部署时资源仍指向根路径
      },
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
        baseUrl: getEnLocaleBaseUrl(),
      },
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    navbar: {
      title: 'IPWeb API Docs',
      logo: {
        alt: 'IPWeb API Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "IPWeb Docs",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "X",
      //         href: "https://x.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}  IPWeb, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
