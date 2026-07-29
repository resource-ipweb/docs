---
sidebar_position: 1
sidebar_label: Clash Verge 配置使用教程
description: 在 Clash Verge 中配置 IPWeb 静态住宅代理的完整教程。
---
# Clash Verge 配置使用教程

***如果当前已有可用的境外网络环境，请按「clash verge 配置」章节操作；如果当前无可用的境外网络环境，请按「链式代理」章节配置。***

IPWeb 提供全球 **7000 万+ 纯净住宅 IP**，覆盖 **220+ 国家/地区**，支持 HTTP/HTTPS/SOCKS5 三种协议，可满足数据采集、账号运营、广告验证等多种业务场景。本教程将引导你完成从注册购买到在 **Clash Verge** 客户端中完成配置的全流程。


> 遇到问题随时联系我们：Telegram [t.me/ipwebadmin](https://t.me/ipwebadmin) | 电话 13064703052 | QQ（扫码） | 微信（扫码）
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ二维码" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="微信二维码" width="160" />


## 基础流程


### 1、注册账号

第一步，打开 IPWeb 官网 `https://ipweb.cc`，点击页面顶部导航栏中的「**注册**」按钮（已有账号的用户可直接点击「**登录**」）。

![IPWeb官网首页](https://oss.ipweb.cc/docs/imgs/2026/07/image1.png)

第二步，在注册页面填写你的**邮箱地址**和**登录密码**；也可以直接使用 **Gmail 账号**快捷注册（推荐），省去额外的密码设置步骤。

![IPWeb注册/登录](https://oss.ipweb.cc/docs/imgs/2026/07/image2.png)

第三步，前往邮箱查收验证邮件，点击邮件中的**确认链接**完成邮箱验证。如果收件箱没有看到邮件，请检查垃圾邮件文件夹。（部分邮箱可能有延迟，耐心等待几分钟即可）

### 2、领取试用流量

注册完成后，首次登录 IPWeb 用户后台 `https://user.ipweb.cc`，联系客服即可获赠 **免费试用流量**，体验全类型代理服务。

> 新用户可以先使用赠送流量测试代理效果，确认满足需求后再选择正式套餐。

### 3、购买代理 IP 套餐

成功登录 IPWeb 后，在左侧仪表盘选择你要购买的静态住宅代理。

静态住宅代理采用**按 IP 数量 + 订阅时长**计费的模式，购买后获得固定的住宅 IP 地址。

第一步，在左侧导航栏中依次点击「**静态住宅代理**」→「**购买代理**」。

第二步，设置以下参数：

| 参数项      | 说明                                           |
| -------- | -------------------------------------------- |
| 国家 / 地区  | 支持按国家 / 城市精准定位                               |
| IP 质量与用途 | 根据实际业务用途匹配 IP 质量（基础 / 标准 / 高端），确保资源纯净度契合平台要求 |
| 协议与特性    | 默认提供 SOCKS5 / HTTP 交付，IP 特性为**独享**，保障业务隔离安全  |
| 订阅时长     | 支持从 **7 天到 1 年**的订阅周期，按需选择                   |
| 购买数量     | 根据需要的固定 IP 数量填写                              |

![静态代理参数配置](https://oss.ipweb.cc/docs/imgs/2026/07/image4.png)

第三步，确认订单金额后，按页面支持的支付方式完成付款。


### 4、获取代理 IP 连接信息


购买完成后，在左侧导航栏中进入「**已购线路明细**」，即可查看你专属的：

- **静态 IP 地址**
- **端口号**
- **账密（用户名 / 密码）**

这些信息可以直接用于客户端配置。

![已购线路明细](https://oss.ipweb.cc/docs/imgs/2026/07/image7.jpeg)


## Clash Verge 配置

本教程针对 **Clash Verge** 客户端编写。Clash Verge 是一款基于 Clash Meta 内核的 Windows / macOS 代理工具，与原版 Clash 在界面和操作路径上有明显差异，以下步骤均以 **Clash Verge** 为准。

配置前请确保你已经完成了上一节的购买流程，并拿到了代理连接信息（代理服务器地址、端口号、用户名、密码）。

### 1、准备代理连接信息

确认你手上有以下四项信息：

- **代理服务器地址**
- **端口号**
- **用户名**
- **密码**


### 2、编辑 Clash Verge 配置文件

打开 **Clash Verge** 客户端，按以下步骤操作：

**① 创建本地 YAML 配置文件**

在电脑上新建一个文本文件，将以下内容复制进去。把占位符替换为你在第 3 节获取的实际信息（注意保留英文引号）：

```yaml
proxies:
  - name: "proxy1"
    type: socks5
    server: 你的代理服务器地址
    port: 7778
    username: "你的用户名"
    password: "你的密码"
    udp: true
```

> 如果你的 Clash Verge 已有其他配置，可以将上面的 `proxies:` 和 `proxy-groups:` 部分合并到已有配置中，保留原有节点即可。

**② 新建订阅并导入配置**

点击左侧导航栏的「**订阅**」，然后点击右侧的「**新建**」按钮。

![进入订阅页面并点击新建](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step1.png)

在弹出的「**新建配置**」窗口中：
   - **类型**：选择 `Local`
   - **名称**：填写 `IPWeb`（或其他你容易识别的名称）
   - 点击「**选择文件**」选中你刚才创建的 YAML 文件
   - 点击「**保存**」

![新建本地配置并选择文件](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2.png)

**③ 查看已导入的配置内容**

导入成功后，右键 IPWeb 配置卡片，在弹出的菜单中选择「**编辑文件**」，可以看到刚才写入的代理配置信息。如果需要修改也可以在此处直接调整。

![查看/编辑YAML配置文件内容](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step3.png)

**④ 激活配置**

回到订阅页面，找到 **IPWeb** 配置卡片，右键点击它，在弹出的菜单中选择「**使用**」（即激活该配置）。

![右键IPWeb配置卡片选择使用以激活](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2-5.png)

### 3、切换到 IPWeb 代理节点

回到左侧导航栏，点击「**代理**」。在代理组列表中找到刚才添加的 **IPWeb 节点**（`proxy1`），点击选中它。

![在代理页面选中IPWeb节点](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step4.png)

### 4、开启系统代理并验证

确认以下两项均已就绪：

1. **系统代理已开启**：点击左侧导航栏「**首页**」，在网络设置区域确认「**系统代理**」开关处于**打开状态**
2. **当前节点正确**：首页右侧应显示你选中的 IPWeb 节点名称

![首页确认系统代理开启与节点状态](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step6.png)

打开浏览器访问 `https://ipinfo.io` 或其他 IP 检测网站，检查返回的 IP 地址是否为你所选购地区的代理 IP。如果显示正确，说明配置成功。

![IPinfo检测结果示例 — 显示代理IP归属地](https://oss.ipweb.cc/docs/imgs/2026/07/ipinfo-result.png)

> 如果 IP 检测显示的是你本地 IP，请确认：① Proxies 页面当前选中的节点是 IPWeb 节点；② 首页系统代理开关已打开；③ 配置文件中的占位符已替换为实际的连接信息。

### 5、规则分流（可选）

如果你希望只有特定流量走 IPWeb 代理，而其他流量继续走原有节点或直连，可以在配置的 `rules` 部分添加分流规则：

```yaml
rules:
  - DOMAIN-SUFFIX,target-website.com,proxy1
  - IP-CIDR,10.0.0.0/8,DIRECT
  - MATCH,Proxy
```

这样只有访问目标域名（如 `target-website.com`）的请求才会通过 IPWeb 代理发出（走 `proxy1` 节点），其余流量按原有规则路由。

## 链式代理

如果本地网络无法直接连接境外代理服务器，可以在 Clash Verge 中配置两层代理：先通过一个可正常连接的境外代理建立前置链路，再连接目标国家/地区的静态住宅代理。

完整链路如下：

> **本机 → 前置代理（proxy1）→ 后置代理（proxy2）→ 目标网站**

其中，`proxy1` 只负责建立稳定的境外网络链路；`proxy2` 才是最终对外访问使用的目标国家/地区 IP。配置成功后，IP 检测网站应显示 `proxy2` 的 IP 地址和归属地，而不是本地 IP 或 `proxy1` 的出口 IP。

### 1、准备两组代理信息

配置前，请准备以下两个节点：

| 节点 | 用途 | 建议 |
| --- | --- | --- |
| `proxy1` | 前置代理，用于连接境外网络 | 选择本地可稳定连接、延迟较低的境外节点 |
| `proxy2` | 提供最终业务出口 IP | 选择实际业务所需国家/地区的静态住宅代理 |

### 2、将两个节点写入配置文件
① 创建本地 YAML 配置文件

在电脑上新建一个文本文件，将两个节点写入同一个 `proxies` 列表，并把示例内容替换为实际连接信息：

```yaml
proxies:
  # 第一跳：可正常连接的境外前置代理
  - name: "proxy1"
    type: socks5
    server: 你的前置代理服务器地址
    port: 端口号
    username: "你的前置代理用户名"
    password: "你的前置代理密码"
    udp: true

  # 第二跳：目标国家/地区的静态住宅代理
  - name: "proxy2"
    type: http
    server: 你的后置代理服务器地址
    port: 端口号
    username: "你的后置代理用户名"
    password: "你的后置代理密码"
```

**② 新建订阅并导入配置**

点击左侧导航栏的「**订阅**」，然后点击右侧的「**新建**」按钮。

![进入订阅页面并点击新建](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step1.png)

在弹出的「**新建配置**」窗口中：
   - **类型**：选择 `Local`
   - **名称**：填写 `IPWeb`（或其他你容易识别的名称）
   - 点击「**选择文件**」选中你刚才创建的 YAML 文件
   - 点击「**保存**」

![新建本地配置并选择文件](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2.png)

![在配置文件中添加前置代理和IPWeb代理](https://oss.ipweb.cc/docs/imgs/clash-verge-chain-config.png)

请注意：

- `type` 必须与节点实际支持的协议一致。
- `port` 必须填写实际端口号，不能直接照抄示例。
- 如果配置文件中已经存在 `proxies:`，只需把缺少的节点追加到现有列表中，不要重复创建第二个 `proxies:`。

**③ 激活配置**

回到订阅页面，找到 **IPWeb** 配置卡片，右键点击它，在弹出的菜单中选择「**使用**」（即激活该配置），否则可能不生效。

![右键IPWeb配置卡片选择使用以激活](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2-5.png)

### 3、按顺序建立代理链

进入 Clash Verge 的「**代理**」页面，按下列顺序操作：

1. 点击右上角的「**链式代理**」，进入链式代理模式。
2. 先点击前置节点 `proxy1`，将其添加为第 **1** 跳。
3. 再点击 `proxy2`，将其添加为第 **2** 跳。
4. 检查右侧「代理链配置」中的顺序为 `1 proxy1`、`2 proxy2`。
5. 点击「**连接**」，启用当前代理链。

![在Clash Verge中按proxy1到proxy2的顺序建立代理链](https://oss.ipweb.cc/docs/imgs/clash-verge-chain-mode.png)

> 节点顺序不能颠倒。正确顺序是先连接前置代理，再通过前置代理连接后置代理。如果添加顺序有误，可点击节点右侧的删除图标移除后重新添加。

### 4、开启系统代理并验证最终出口

回到「**首页**」，确认「**系统代理**」已经开启。然后打开浏览器访问 `https://ipinfo.io`，或其他可信的 IP 检测网站，核对以下信息：

- 当前 IP 地址是否与在 IPWeb 中购买的目标 IP 一致；
- 国家/地区、城市和 ASN 是否符合所购线路信息；
- 检测结果是否保持稳定，刷新页面后没有回到本地 IP。

![链式代理连接后检查最终出口IP的归属地和ASN](https://oss.ipweb.cc/docs/imgs/clash-verge-chain-ip-check.jpg)

如果页面显示的是 `proxy2` 对应的目标 IP，说明链式代理已经生效。由于流量需要经过两层节点，延迟通常会高于单节点连接，这是正常现象。

### 5、常见问题排查

| 现象 | 建议检查项 |
| --- | --- |
| `proxy1` 和 `proxy2` 不显示 | 确认 YAML 缩进正确、配置已保存，并重新激活当前订阅 |
| 节点不显示延迟或连接失败 | 分别核对服务器地址、端口、协议和账密，先确认两个节点均可用 |
| 检测结果仍是本地 IP | 确认订阅已更新，系统代理已开启，并已点击链式代理页面中的「连接」 |
| 检测结果是前置代理 IP | 检查代理链是否缺少 `proxy2`，以及节点顺序是否为 `proxy1 → proxy2` |
| 连接成功但速度较慢 | 更换延迟更低、连接更稳定的前置节点，尽量减少不必要的代理层级 |

> 不同 Clash Verge 版本的按钮位置或名称可能略有差异，请以当前客户端界面为准。请仅将代理用于合法合规的业务场景，并遵守目标网站的服务条款及当地法律法规。

---

> 如遇到上述未覆盖的问题，欢迎随时通过以下方式联系我们获取技术支持：
>
> - **Telegram**: [t.me/ipwebadmin](https://t.me/ipwebadmin)
> - **电话**: 13064703052
> - **QQ**:（扫码添加）
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ二维码" width="160" />
>
> - **微信**:（扫码添加）
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="微信二维码" width="160" />
>
> - **帮助文档**: [https://docs.ipweb.cc/](https://docs.ipweb.cc/)
>
> 更多客户端配置教程（NekoBox、v2rayN 等）请访问 [IPWeb 代理IP配置教程](https://docs.ipweb.cc/category/configuration-guide/)。

