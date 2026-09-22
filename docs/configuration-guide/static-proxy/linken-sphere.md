---
sidebar_position: 15
sidebar_label: Linken Sphere 配置使用教程
description: 在 Linken Sphere 中配置 IPWeb 静态原生代理的完整教程。
---
# Linken Sphere 指纹浏览器配置 IPWeb 静态原生代理教程

***在使用 IPWeb 代理服务之前，请确保您的网络环境可以正常访问境外资源。如遇连接问题，请检查本地网络或联系客服获取协助。*** 

IPWeb 提供全球 **7000 万+ 纯净住宅 IP**，覆盖 **220+ 国家/地区**，支持 HTTP/HTTPS/SOCKS5 三种协议，可满足数据采集、账号运营、广告验证等多种业务场景。

其中，**静态原生代理**能够提供稳定的固定出口 IP，更适合对网络环境连续性和连接稳定性有要求的业务。本教程将介绍从注册、试用、购买静态原生代理，到在 **Linken Sphere 指纹浏览器**中完成 IPWeb 代理配置与连通性验证的完整流程。

> **遇到问题随时联系我们：**
>
> - Telegram：[t.me/ipwebadmin](https://t.me/ipwebadmin)
> - 电话：`13064703052`
> - QQ：扫码添加
> - 微信：扫码添加
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="IPWeb QQ二维码" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="IPWeb 微信二维码" width="160" />

## 基础流程 

### 1、注册账号

打开 IPWeb 官网 `https://ipweb.cc`，点击页面顶部导航栏中的[**注册**](https://user.ipweb.cc/console/sign-up)（已有账号的用户可直接点击[**登录**](https://user.ipweb.cc/console/sign-in)）。

进入注册页面后，默认可通过「**邮箱注册**」创建账号。依次填写账号 / 邮箱、邮箱验证码、密码和确认密码，点击「**发送验证码**」后前往邮箱查收验证码。填写完成后，勾选同意《服务协议》和《隐私政策》，再点击「**立即注册**」完成注册。也可以切换到「**手机号注册**」，按页面提示使用手机号完成注册。

![IPWeb邮箱注册页面](https://oss.ipweb.cc/docs/imgs/2026/09/ipweb-sign-up.png)

已有账号的用户可直接进入登录页面，通过账号 / 邮箱和密码登录；也可以切换到手机号登录。

登录页面下方同时提供「**以 Google 的身份登录**」入口，可使用 Google 账号快捷完成注册或登录，无需单独填写邮箱注册信息。

![IPWeb账号登录页面](https://oss.ipweb.cc/docs/imgs/2026/09/ipweb-sign-in.png)

### 2、领取试用流量

注册完成后，首次登录[ IPWeb 用户后台 ](https://user.ipweb.cc/console/sign-in)，联系客服即可获赠 **免费试用流量**，体验全类型代理服务。

> 新用户可以先使用赠送流量测试代理效果，确认满足需求后再选择正式套餐。

### 3、购买静态原生代理

登录 IPWeb 用户后台后，在左侧导航栏进入「**代理产品**」→「**静态原生代理**」→「**购买代理**」。

进入购买页面后，可根据使用需求选择 **独享** 或 **共享**，并选择是否开启「**自定义购买**」。

![IPWeb静态原生代理购买页面](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-buy-proxy-custom-dedicated-steps.png)

购买时主要需要确认以下参数：

| 参数项 | 说明 |
| --- | --- |
| 独享 / 共享 | 独享代理由当前账户独立使用，共享代理使用共享资源池 |
| 国家 / 地区 | 选择需要的代理出口位置，可选范围以后台当前资源为准 |
| 业务用途 | 有特定使用场景时可按需选择，没有特殊需求可不选 |
| UDP | 根据实际使用的软件、协议和业务需求选择是否开启 |
| 带宽 | 选择当前代理实例所需的带宽规格 |
| 连接数（QPS） | 根据实际并发请求需求选择对应规格 |
| IP 购买时长 | 选择代理 IP 的服务周期 |
| IP 购买数量 | 填写本次需要购买的 IP 数量 |

如果关闭「**自定义购买**」，页面会切换为预设规格购买模式，带宽、QPS 和 UDP 等参数由当前套餐预设。

确认国家/地区、规格、购买时长、IP 数量及应付金额无误后，点击「**确认下单**」。系统生成订单后，选择页面支持的支付方式并完成付款。订单确认后，线路生成通常可能需要 **3–5 分钟**，请等待系统完成资源配置。

如需查看独享/共享、自定义购买、各项规格参数及支付流程的详细说明，可参考 [IPWeb 静态原生代理使用指南](https://docs.ipweb.cc/static-native-user-guide/)。

### 4、查看代理连接信息

静态原生代理购买并开通后，在左侧导航栏进入「**代理产品**」→「**静态原生代理**」→「**我的 IP**」，即可查看当前账户下已购买的代理资源。

![IPWeb静态原生代理已购IP查看页面](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-my-ips.png)

在代理列表中，重点确认后续 Linken Sphere 配置需要使用的信息：

- **IP**：已购买的静态原生代理地址；
- **端口号**：代理连接所使用的端口；
- **账号 / 密码**：连接代理时使用的认证信息；
- **使用状态**：确认当前代理资源处于可用状态。

页面还会显示国家/地区、带宽、共享/独享、连接数（QPS）、到期/续费、UDP 等信息，可用于核对当前代理资源。后续配置 Linken Sphere 时，主要使用这里显示的 **代理 IP、端口号、账号和密码**。

如需了解代理筛选、账号导出、续费及其他管理操作，可参考 [IPWeb 静态原生代理使用指南](https://docs.ipweb.cc/static-native-user-guide/)。

## Linken Sphere 指纹浏览器配置

完成上述流程并获取 IPWeb 的**代理 IP 地址、端口号、用户名和密码**后，即可在 **Linken Sphere** 中完成代理配置。

### 1、创建浏览器会话

打开 Linken Sphere，在主界面点击左上角的 **“NEW SESSION”** 创建一个新的浏览器会话。

创建完成后，新会话会出现在当前 Desktop 的会话列表中。

![创建浏览器](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-1.png)

### 2、配置 IPWeb 代理

在会话列表中找到刚刚创建的会话，点击最右侧的 **“⋮”。**

![配置 IPWeb 代理](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-2.png)

在展开的菜单中选择 **“Set proxy”**。

进入 **“Set proxy to”** 页面后，可以为当前会话添加或选择代理。

![配置 IPWeb 代理](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-3.png)

如果还没有添加代理，点击 **“NEW PROXY”**，将从 IPWeb 获取的代理信息填写进去，包括：

- **代理协议**：选择与 IPWeb 获取代理时一致的协议，例如 `SOCKS5` 或 HTTP/HTTPS

- **代理主机**：填写 IPWeb 提供的代理服务器地址

- **端口**：填写对应的代理端口

- **用户名**：填写代理账号

- **密码**：填写代理密码

![配置 IPWeb 代理](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-4.png)

填写完成后保存代理。保存成功后，代理会出现在列表中，同时可以看到该代理检测到的国家/地区、城市以及时区等信息。

![配置 IPWeb 代理](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-5.png)

如果需要一次添加多条 IPWeb 代理，也可以使用右上角的 **“IMPORT FROM LIST”** 批量导入代理列表。

### 3、检查代理

在代理列表中勾选刚刚添加的 IPWeb 代理，然后点击底部的 **“CHECK PROXY”**。

当页面出现 **“Connection successfully validated”**，说明当前代理可以正常连接。

![检查代理](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-6.png)

检测通过后，保持该代理处于选中状态，点击底部的 **“SET”**，将它绑定到当前浏览器会话。

返回会话列表后，可以在 **Proxy** 一栏查看当前会话使用的代理信息。

确认代理已经绑定后，点击会话左侧的启动按钮运行浏览器。

浏览器启动后，该会话会通过已设置的 IPWeb 代理连接网络。后续如需更换代理，可以再次打开会话右侧的 **“⋮”** 菜单，进入 **“Set proxy”** 重新选择或添加代理。

---

> 如遇到上述未覆盖的问题，欢迎随时通过以下方式联系我们获取技术支持：
>
> - **Telegram**：[t.me/ipwebadmin](https://t.me/ipwebadmin)
> - **电话**：13064703052
> - **QQ**：扫码添加
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="IPWeb QQ二维码" width="160" />
>
> - **微信**：扫码添加
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="IPWeb 微信二维码" width="160" />
>
> - **帮助文档**：[https://docs.ipweb.cc/](https://docs.ipweb.cc/)
>

