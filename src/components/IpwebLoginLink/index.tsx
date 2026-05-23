import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';
import {
  buildIpwebLoginUrl,
  type IpwebLoginLang,
} from '@site/src/utils/ipwebLoginUrl';

type IpwebLoginLinkProps = {
  /** 链接显示文字，默认为登录页 URL */
  label?: string;
  /** 覆盖当前文档 locale 对应的 lang（默认 zh 文档为 zh，en 文档为 en） */
  lang?: IpwebLoginLang;
};

const DEFAULT_LABEL = 'https://ipweb.cc/iproxy/login';

/**
 * 根据当前文档 locale 解析 lang：中文文档为 zh，英文为 en。
 */
function resolveDocLang(
  currentLocale: string,
  override?: IpwebLoginLang,
): IpwebLoginLang {
  if (override) {
    return override;
  }
  return currentLocale === 'en' ? 'en' : 'zh';
}

/**
 * IPWEB 后台登录链接：始终带 lang；channelCode 仅当构建时配置了 CHANNEL_CODE 才追加。
 */
export default function IpwebLoginLink({
  label = DEFAULT_LABEL,
  lang: langOverride,
}: IpwebLoginLinkProps): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const channelCode = siteConfig.customFields?.channelCode as
    | string
    | undefined;
  const lang = resolveDocLang(i18n.currentLocale, langOverride);
  const href = buildIpwebLoginUrl({
    channelCode: channelCode || undefined,
    lang,
  });

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </Link>
  );
}
