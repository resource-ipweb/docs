---
sidebar_position: 17
sidebar_label: MoreLogin 配置使用教程
description: 在 MoreLogin 中配置 IPWeb 静态原生代理的完整教程。
---
# MoreLogin 指纹浏览器配置 IPWeb 静态原生代理教程

***在使用 IPWeb 代理服务之前，请确保您的网络环境可以正常访问境外资源。如遇连接问题，请检查本地网络或联系客服获取协助。***

IPWeb 提供全球 **7000 万+ 纯净住宅 IP**，覆盖 **220+ 国家/地区**，支持 HTTP/HTTPS/SOCKS5 三种协议，可满足数据采集、账号运营、广告验证等多种业务场景。

其中，**静态原生代理**能够提供稳定的固定出口 IP，更适合对网络环境连续性和连接稳定性有要求的业务。本教程将介绍从注册、试用、购买静态原生代理，到在 **MoreLogin 指纹浏览器**中完成 IPWeb 代理配置与连通性验证的完整流程。

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

在代理列表中，重点确认后续 MoreLogin 配置需要使用的信息：

- **IP**：已购买的静态原生代理地址；
- **端口号**：代理连接所使用的端口；
- **账号 / 密码**：连接代理时使用的认证信息；
- **使用状态**：确认当前代理资源处于可用状态。

页面还会显示国家/地区、带宽、共享/独享、连接数（QPS）、到期/续费、UDP 等信息，可用于核对当前代理资源。后续配置 MoreLogin 时，主要使用这里显示的 **代理 IP、端口号、账号和密码**。

如需了解代理筛选、账号导出、续费及其他管理操作，可参考 [IPWeb 静态原生代理使用指南](https://docs.ipweb.cc/static-native-user-guide/)。

## MoreLogin 指纹浏览器配置

完成上述流程并获取 IPWeb 的服务器地址、端口、用户名和密码后，即可将代理添加到 MoreLogin 浏览器环境中。

### 1、打开环境并进入代理设置

打开 **MoreLogin**，在左侧进入「**环境**」页面，并切换到「**浏览器**」列表。

![MoreLogin 浏览器环境列表](https://oss.ipweb.cc/docs/imgs/2026/09/morelogin-1.png)

找到需要配置代理的浏览器环境，在「**代理**」一栏点击编辑图标，即可打开「**修改代理**」窗口。

如果当前还没有可用环境，也可以先点击右上角的「**新建环境**」创建一个浏览器环境，再进行代理配置。

### 2、添加 IPWeb 代理

在「**修改代理**」窗口中选择「**新代理**」。

![MoreLogin 新代理](https://oss.ipweb.cc/docs/imgs/2026/09/morelogin-2.png)

然后根据上一节从 IPWeb 后台获取的代理连接信息填写：

| MoreLogin 配置项 | 填写说明 |
| --- | --- |
| **代理类型** | 选择与 IPWeb 当前代理一致的协议，例如 `HTTP`、`HTTPS` 或 `SOCKS5`。 |
| **IP 查询渠道** | 可保持默认的 `IP2Location`。 |
| **代理服务器** | 填写 IPWeb 提供的代理主机和端口。 |
| **代理账号** | 填写 IPWeb 提供的代理用户名。 |
| **代理密码** | 填写对应的代理密码。 |
| **刷新 URL** | 如果当前代理提供刷新链接，可以填写；没有则保持为空。 |

例如，若从 IPWeb 导出的账号格式为：

```text
IP:PORT:USERNAME:PASSWORD
```

则对应填写关系如下：

```text
IP:PORT   → MoreLogin「代理服务器」
USERNAME  → MoreLogin「代理账号」
PASSWORD  → MoreLogin「代理密码」
```

![MoreLogin 填写 IPWeb 代理信息](https://oss.ipweb.cc/docs/imgs/2026/09/morelogin-3.png)

> **注意：** MoreLogin 中选择的代理类型要与 IPWeb 获取代理时使用的协议保持一致，否则代理可能无法正常连接。

### 3、检测代理

代理信息填写完成后，点击窗口底部的「**代理检测**」。

检测成功后，页面会显示「**检测通过**」，并展示当前代理的出口 IP 和归属地区等信息。

![MoreLogin 代理检测](https://oss.ipweb.cc/docs/imgs/2026/09/morelogin-4.png)

确认检测通过后，点击右下角的「**确定**」保存代理设置。

### 4、保存并启动浏览器环境

保存成功后，返回 MoreLogin 的环境列表。

![MoreLogin 保存代理后的环境列表](https://oss.ipweb.cc/docs/imgs/2026/09/morelogin-5.png)

此时在「**代理**」一栏可以看到当前环境已经绑定了对应的代理信息和地区。

点击环境右侧的「**启动**」，打开浏览器环境。启动后，该环境会通过已配置的 IPWeb 代理连接网络。

如需进一步确认代理是否生效，也可以在当前 MoreLogin 浏览器环境中访问 `https://ipinfo.io` 或其他 IP 检测网站，检查当前显示的出口 IP 是否与 IPWeb 代理一致。

### 5、常见问题排查

| 现象 | 建议检查项 |
| --- | --- |
| 无法连接代理 | 检查代理服务器地址和端口是否正确，并确认当前 IPWeb 代理仍然有效。 |
| 提示认证失败 | 重新核对 IPWeb 提供的代理账号和密码，避免复制时带入空格。 |
| 代理检测未通过 | 检查本地网络是否能够正常连接代理服务器。 |
| 已填写账密但仍无法使用 | 确认 MoreLogin 中选择的代理类型与 IPWeb 实际代理协议一致。 |
| 浏览器启动后显示本地 IP | 返回代理设置，确认代理已保存并绑定到当前浏览器环境。 |
| 检测地区与预期不一致 | 核对当前填写的 IPWeb 代理是否为所购买的目标国家 / 地区或城市节点。 |

> 不同 MoreLogin 版本的界面布局或按钮名称可能略有差异，请以当前客户端实际界面为准。请仅将代理用于合法合规的业务场景，并遵守目标网站的服务条款及当地法律法规。

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

