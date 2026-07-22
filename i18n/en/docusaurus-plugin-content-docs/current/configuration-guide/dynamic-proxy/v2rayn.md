---
sidebar_position: 2
sidebar_label: v2rayN Configuration Guide
description: Complete guide to configuring IPWeb dynamic residential proxies in v2rayN.
---
# IPWeb Proxy IP Configuration Guide — v2rayN

***Before using IPWeb proxy services, make sure your network can access international resources normally. If you encounter connection issues, check your local network or contact customer support for assistance.***

IPWeb provides **70 million+ clean residential IPs** worldwide across **220+ countries/regions**, supporting HTTP, HTTPS, and SOCKS5 protocols for use cases such as data collection, account operations, and ad verification. This guide walks you through the full workflow—from registration and purchase to configuring proxies in the **v2rayN** client.

> Need help? Contact us anytime: Telegram [t.me/ipwebadmin](https://t.me/ipwebadmin) | Phone 13064703052 | QQ (scan QR code) | WeChat (scan QR code)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ QR code" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="WeChat QR code" width="160" />

---
## Getting Started

### 1. Create an Account

Step 1: Open the IPWeb website at `https://ipweb.cc` and click the **注册 (Register)** button in the top navigation bar (if you already have an account, click **登录 (Log In)** instead).

![IPWeb homepage](https://oss.ipweb.cc/docs/imgs/2026/07/image1.png)

Step 2: On the registration page, enter your **email address** and **login password**; or use **Sign in with Gmail** for quick registration (recommended) to skip setting a separate password.

Step 3: Check your inbox for a verification email and click the **confirmation link** to verify your email. If you do not see the email, check your spam folder. (Some mail providers may delay delivery—wait a few minutes.)

![IPWeb registration / login](https://oss.ipweb.cc/docs/imgs/2026/07/image2.png)

### 2. Claim Trial Traffic

After registration, log in to the IPWeb user dashboard at `https://user.ipweb.cc` for the first time and contact customer support to receive **free trial traffic** to try all proxy types.

> New users can test proxy performance with the complimentary traffic before choosing a paid plan.

### 3. Purchase a Dynamic Residential Proxy Plan

After logging in to IPWeb, select the dynamic residential proxy product you want to use from the left dashboard.

Dynamic residential proxies use a **pay-as-you-go traffic billing** model—no fixed plan purchase required. Usage is metered as soon as you generate proxies.

Step 1: In the left menu of the user dashboard, click **获取代理 (Get Proxy)**.

Step 2: Configure the following parameters:

- **国家 / 地区 (Country / Region)**: Choose the target location for your proxy IPs based on your workload (220+ countries supported)
- **代理服务器 (Proxy Server)**: After selecting a country, the system automatically assigns the corresponding **proxy server address**
- **IP 持续时间 (IP Session Duration)**: Maximum time a single IP can be used. When the period ends, the IP rotates automatically. **IP rotation does not interrupt your connection**—the proxy account remains usable; only the exit IP changes. Choose a duration that fits your workload
- **代理数量 (Proxy Count)**: Number of proxy lines to export (e.g., enter `5` for five lines). Each export is limited to **1,000** lines
- **代理协议 (Proxy Protocol)**: HTTP or SOCKS5 (choose based on client support)

![Dynamic proxy parameter configuration](https://oss.ipweb.cc/docs/imgs/2026/07/image3.png)

Step 3: The first time you generate proxies, you must **set a proxy password**—this password is used for client authentication. Note: **password changes take about 1 minute to take effect**. If your proxy credentials are leaked or compromised, change this password immediately.

Step 4: After confirming all parameters, click **生成代理 (Generate Proxy)**. The system will automatically download a **txt file** containing the generated proxy connection details—one line per proxy—in the following format:

```
proxy_server_address:port:username:password
```

Save this file securely; you will need it when configuring v2rayN later.


### 4. Top Up & Payment

IPWeb supports the following payment methods:

| Payment Method | Description |
|---------|------|
| Alipay (HK) | Settled in HKD, instant credit |
| USDT-TRC20 | Cryptocurrency payment |
| Bank Transfer | Available for enterprise customers |

Complete payment in the dashboard under **财务管理 > 充值中心 (Finance > Top-Up Center)**. Enterprise customers with custom requirements can contact support for a dedicated quote.

> Dynamic residential proxies are billed by traffic usage. After topping up, monitor your remaining balance to avoid service interruption due to insufficient funds.


### 5. Monitor Traffic Usage

After purchase, you can manage your account assets and usage data visually through the IPWeb dashboard at any time.

#### Dashboard Overview

The **仪表盘 (Dashboard)** page you land on after login is your data control center. You can see your **total balance** and **remaining available traffic** for each product line at a glance. Watch for low-traffic alerts so you can top up in time and avoid business disruption.

![Dashboard overview](https://oss.ipweb.cc/docs/imgs/2026/07/image5.png)

#### Traffic Usage History

Click **流量历史 (Traffic History)** under **动态住宅代理 (Dynamic Residential Proxy)** in the left navigation bar. The system generates consumption reports automatically, letting you review traffic usage for specific time periods in detail.

![Traffic usage history](https://oss.ipweb.cc/docs/imgs/2026/07/image6.png)

#### Top-Up History

Click **充值历史 (Top-Up History)** under **动态住宅代理 (Dynamic Residential Proxy)**. This page records every dynamic proxy top-up with **time, order number, amount, and status** for finance reconciliation and cost management.

![Top-up history](https://oss.ipweb.cc/docs/imgs/2026/07/image8.png)

---

## Configure IPWeb Proxies in v2rayN

This guide is written for the **v2rayN** client. v2rayN is a Windows proxy tool built on the V2Ray core, supporting SOCKS5, HTTP, and other proxy protocols. The steps below apply to **v2rayN 7.x** (earlier 6.x versions follow a similar workflow).

Before configuring, complete the purchase workflow in the previous section and have your proxy connection details ready (proxy server address, port, username, and password).

### Step 1: Prepare Proxy Connection Details

Confirm you have the following four items:

- **Proxy server address**
- **Port number**
- **Username**
- **Password**

> If you purchased **dynamic residential proxies**, these details are in the txt file you generated and downloaded; for **static residential proxies**, view them under **已购线路明细 (Purchased Line Details)**.
>
> Each line in the txt file follows the format `server_address:port:username:password` and can be used directly in order.

### Step 2: Add an HTTP / SOCKS5 Proxy Server

Open the **v2rayN** client and follow these steps:

**① Create a new server from the Settings menu**

1. Click **配置项 (Settings)** in the top menu bar.
2. In the dropdown menu, click **添加 [HTTP] (Add [HTTP])** (if your proxy protocol is SOCKS5, choose **添加 [SOCKS] (Add [SOCKS])** instead). The fields are the same for both—only the protocol type differs.

![v2rayN Settings menu — select Add [HTTP]](https://oss.ipweb.cc/docs/imgs/2026/07/v2rayn-step1.png)

**② Fill in the proxy connection parameters**

In the dialog that appears, complete the following fields:

| Parameter | Value | Description |
|-------|---------|------|
| **别名 (remarks)** | `proxy1` or any recognizable name | Used to distinguish servers in the node list |
| **地址 (address)** | Your proxy server address | From the information obtained in Section 3 (e.g., `gate1.ipweb.cc`) |
| **端口 (port)** | Your port number | From the information obtained in Section 3 (e.g., `7778`) |
| **用户名 (optional)** | Your username | IPWeb proxy authentication account |
| **密码 (optional)** | Your password | IPWeb proxy authentication password |

Leave all other fields (transport layer, transport protocol, etc.) at their defaults—no changes needed.

![v2rayN proxy parameters — address / port / credentials](https://oss.ipweb.cc/docs/imgs/2026/07/v2rayn-step2.png)

**③ Save the server**

After confirming the five key fields above are correct, click **确定 (OK)**. The newly added server will appear immediately in the **server list** on the v2rayN main window.

### Step 3: Set as Active Node and Test Latency

**① Right-click the node to set it as active**

In the server list, find the node you just added (e.g., `proxy1`), **right-click it**, and select **设为活动 (Set as Active)** from the context menu (or double-click the node). Once activated, a red **活动 (Active)** label appears next to the node name to indicate the current selection.

You can also select **测试延迟 TcPing（多选） (Test Delay TcPing — Multi-select)** from the same context menu to quickly check connectivity.

![v2rayN right-click node — Set as Active & Test Delay](https://oss.ipweb.cc/docs/imgs/2026/07/v2rayn-step3.png)

> If you need to manage multiple IPWeb proxy accounts, repeat Step 2 to add each one, then switch between nodes as needed.

**② Review the test results**

After the latency test completes, the **延迟 (ms) (Delay (ms))** column on the right side of the server list shows the measured value (e.g., `353`). As long as a value appears (typically in the hundreds of milliseconds), the proxy connection is working.

![v2rayN test passed — latency displayed normally](https://oss.ipweb.cc/docs/imgs/2026/07/v2rayn-step4.png)

### Step 4: Enable Tun Mode and Verify Exit IP

**① Enable Tun mode**

In the **bottom area** of the v2rayN main window, find the **启用 Tun (Enable Tun)** toggle and turn it on (the toggle turns green when enabled). Tun mode routes all system network traffic so every request goes through your selected proxy IP.

![v2rayN bottom bar — Enable Tun mode with live traffic log](https://oss.ipweb.cc/docs/imgs/2026/07/v2rayn-step5.png)

> If you only need the browser to use the proxy while other apps connect directly, use the dropdown next to **清除系统代理 (Clear System Proxy)** at the bottom to switch to PAC or proxy-only mode. For data collection, account operations, and similar use cases, **Tun mode** is recommended to ensure a consistent exit IP for all traffic.

**② Verify the proxy is working**

After completing all steps above, verify using the following method:

**Method 1: Visit an IP lookup site in your browser**

Open a browser and visit `https://ipinfo.io` or another IP lookup site. Check whether the returned **IP address and location** match the proxy region you purchased.

![IPinfo result example — showing proxy IP location](https://oss.ipweb.cc/docs/imgs/2026/07/ipinfo-result.png)

If the result is correct (the IP location matches the country/region you purchased), **v2rayN is configured successfully ✅**.

> If the IP check shows your local IP, troubleshoot in this order:
> 1. Confirm the active server is the correct IPWeb node (the one with the red **活动 (Active)** label in the list)
> 2. Confirm the **启用 Tun (Enable Tun)** toggle is on (green)
> 3. Confirm the address, port, username, and password match the dashboard exactly (watch for extra spaces)
> 4. Right-click the node and run **测试延迟 TcPing (Test Delay TcPing)** again to confirm connectivity

---

> If you run into issues not covered above, contact us for technical support:
>
> - **Telegram**: [t.me/ipwebadmin](https://t.me/ipwebadmin)
> - **Phone**: 13064703052
> - **QQ**: (scan QR code to add)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ QR code" width="160" />
>
> - **WeChat**: (scan QR code to add)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="WeChat QR code" width="160" />
>
> - **Help docs**: https://docs.ipweb.cc/
>
> For more client configuration guides (NekoBox, Clash, etc.), visit the [IPWeb Proxy IP & Technical Articles Hub](https://ipweb.cc/blog/).

