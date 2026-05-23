/** IPWEB 后台登录页基础路径 */
const IPWEB_LOGIN_BASE = 'https://ipweb.cc/iproxy/login';

/**
 * 读取构建时环境变量 CHANNEL_CODE；未配置或为空时不返回（链接中不传该参数）。
 */
export function resolveChannelCode(): string | undefined {
  const explicit = process.env.CHANNEL_CODE?.trim();
  return explicit || undefined;
}

export type IpwebLoginLang = 'zh' | 'en';

export type IpwebLoginUrlOptions = {
  /** 渠道码；未设置时不写入 query */
  channelCode?: string;
  /** 界面语言，中文为 zh，英文为 en */
  lang: IpwebLoginLang;
};

/**
 * 生成 IPWEB 后台登录链接（lang 必填；channelCode 仅在有值时追加）。
 */
export function buildIpwebLoginUrl(options: IpwebLoginUrlOptions): string {
  const params = new URLSearchParams();
  if (options.channelCode) {
    params.set('channelCode', options.channelCode);
  }
  params.set('lang', options.lang);
  const query = params.toString();
  return query ? `${IPWEB_LOGIN_BASE}?${query}` : IPWEB_LOGIN_BASE;
}
