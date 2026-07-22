---
sidebar_position: 3
sidebar_label: NekoBox Configuration Guide
description: Complete guide to configuring IPWeb dynamic residential proxies in NekoBox (Windows).
---
# NekoBox Configuration Guide

***Before using IPWeb proxy services, make sure your network can access international resources normally. If you encounter connection issues, check your local network or contact customer support for assistance.***

IPWeb provides **70 million+ clean residential IPs** worldwide, covering **220+ countries/regions**, and supports HTTP/HTTPS/SOCKS5 protocols for use cases such as data collection, account management, and ad verification. This guide walks you through the full workflow—from registration and purchase to configuring proxies in **NekoBox (Windows)**.

> Need help? Contact us anytime: Telegram [t.me/ipwebadmin](https://t.me/ipwebadmin) | Phone 13064703052 | QQ (scan QR code) | WeChat (scan QR code)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ QR code" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="WeChat QR code" width="160" />

## Basic Workflow

### 1. Create an Account

Step 1: Open the IPWeb website at `https://ipweb.cc` and click **Sign Up** in the top navigation bar (existing users can click **Log In** directly).

![IPWeb homepage](https://oss.ipweb.cc/docs/imgs/2026/07/image1.png)

Step 2: On the registration page, enter your **email address** and **password**; or use **Sign up with Gmail** (recommended) to skip the separate password setup step.

Step 3: Check your inbox for a verification email and click the **confirmation link** to verify your email. If you do not see the email, check your spam folder. (Some mail providers may delay delivery—wait a few minutes if needed.)

![IPWeb sign up / log in](https://oss.ipweb.cc/docs/imgs/2026/07/image2.png)

### 2. Claim Trial Traffic

After registration, log in to the IPWeb user dashboard at `https://user.ipweb.cc` for the first time and contact customer support to receive **free trial traffic** to try all proxy types.

> New users can test proxy performance with the complimentary traffic before choosing a paid plan.

### 3. Purchase a Dynamic Residential Proxy Plan

After logging in to IPWeb, select the dynamic residential proxy product you want to use from the left dashboard.

Dynamic residential proxies use a **pay-as-you-go traffic billing** model. There is no need to purchase a fixed plan in advance—usage is metered when you generate proxies.

Step 1: In the left menu of the user dashboard, click **Get Proxy**.

Step 2: Configure the following parameters:

- **Country / Region**: Choose the target location for your proxy IPs based on your business needs (220+ countries supported)
- **Proxy Server**: After selecting a country, the system automatically assigns the corresponding **proxy server address**
- **IP Session Duration**: Maximum time a single IP can be used. When the period ends, the IP rotates automatically. **IP rotation does not interrupt your connection**—the proxy account remains usable; only the exit IP changes. Choose a duration that fits your workload
- **Proxy Count**: Number of proxy accounts to export (e.g. enter `5` for five lines). Each export is limited to **1,000** lines
- **Proxy Protocol**: HTTP or SOCKS5 (choose based on client support)

![Dynamic proxy parameter configuration](https://oss.ipweb.cc/docs/imgs/2026/07/image3.png)

Step 3: The first time you generate proxies, you must **set a proxy password**—this password is used for client authentication. Note: **password changes take about 1 minute to take effect**; if proxy credentials are leaked or compromised, change the password promptly.

Step 4: After confirming the parameters, click **Generate Proxy**. The system will automatically download a **txt file** containing your proxy connection details—one line per proxy—in this format:

```
proxy_server_address:port:username:password
```

Save this file securely; you will need it when configuring NekoBox.


### 4. Top Up & Payment

IPWeb supports the following payment methods:

| Payment Method | Description |
|---------|------|
| Alipay (HK) | Settled in HKD, instant credit |
| USDT-TRC20 | Cryptocurrency payment |
| Bank Transfer | Available for enterprise customers |

Go to **Finance > Top Up Center** in the dashboard and select your payment method. Enterprise customers with custom requirements can contact support for a dedicated quote.

> Dynamic residential proxies are billed by traffic usage. After topping up, monitor your remaining balance to avoid service interruption due to insufficient funds.


### 5. Monitor Traffic Usage

After purchase, you can manage account assets and usage data visually through the IPWeb dashboard at any time.

#### Overview Dashboard

After logging in, the default **Dashboard** page is your data control center. You can see your account **total balance** and **remaining available traffic** for each product line. Watch for traffic alerts and top up in time to avoid business disruption.

![Dashboard overview](https://oss.ipweb.cc/docs/imgs/2026/07/image5.png)

#### Traffic Usage History

Click **Traffic History** under **Dynamic Residential Proxy** in the left navigation bar. The system generates consumption reports automatically, so you can view traffic details for specific time periods.

![Traffic history](https://oss.ipweb.cc/docs/imgs/2026/07/image6.png)

#### Top-Up History

Click **Top-Up History** under **Dynamic Residential Proxy** to view detailed records of every dynamic proxy top-up, including **time, order number, amount, and status**—useful for finance reconciliation and cost management.

![Top-up history](https://oss.ipweb.cc/docs/imgs/2026/07/image8.png)


## Configure IPWeb Proxies in NekoBox (Windows)

This guide is written for the **NekoBox** client. NekoBox is a Windows proxy tool built on the **sing-box** core. It offers a clean, intuitive interface and supports SOCKS5 / HTTP and other protocols, making it well suited for quick residential proxy setup. All steps below apply to **Windows**.

Before configuring, make sure you have completed the purchase workflow in the previous section and have your proxy connection details (proxy server address, port, username, password). Also confirm you have installed the latest version of [NekoRay](https://github.com/MatsuriDayo/nekoray).

### 1. Prepare Proxy Connection Details

Confirm you have the following four items:

- **Proxy server address**
- **Port number**
- **Username**
- **Password**

> If you purchased **dynamic residential proxies**, these details are in the txt file you generated and downloaded; for **static residential proxies**, view them under **Purchased Line Details**.  
> File format: `server_address:port:username:password`, separated by `:`.

### 2. Add an IPWeb Proxy Node

Open the **NekoBox** client and follow these steps:

#### ① Right-click and select "Manual Input"

After launching NekoBox, **right-click in a blank area** of the server list on the main screen and select **Manual Input** from the context menu.

![NekoBox right-click manual input](https://oss.ipweb.cc/docs/imgs/2026/07/nekoray-step1.png)

#### ② Fill in node configuration

In the **Edit** dialog, fill in the fields as follows:

| Field | Value |
| --- | --- |
| **Type** | Select `Socks` (SOCKS5 protocol) |
| **Name** | `proxy1` or any recognizable name |
| **Address** | Your proxy server address |
| **Port** | Your port number (e.g. `7778`) |

Then fill in authentication details in the **Socks** section below:

| Field | Value |
| --- | --- |
| **Version** | `5` (SOCKS5) |
| **Username** | Your proxy username (e.g. `B_57164U...`) |
| **Password** | Your proxy password |

> ⚠️ If you obtained an HTTP proxy from the IPWeb dashboard, change **Type** to the corresponding HTTP option; for SOCKS5, select `Socks` and set **Version** to `5`. The protocol must match what you selected in the dashboard, or the connection will fail.

When finished, click **OK** at the bottom of the dialog to save the node.

![NekoBox edit dialog](https://oss.ipweb.cc/docs/imgs/2026/07/nekoray-step2.png)

### 3. Confirm the Node Was Added

After saving, return to the main screen. You should see the newly added node in the **server list** with type `Socks` and the correct address and name.

![NekoBox server list](https://oss.ipweb.cc/docs/imgs/2026/07/nekoray-step3.png)

> If you have multiple IPWeb proxies (for example, after bulk export), repeat Step 2 to add each one. You can switch between nodes freely afterward.

### 4. Start the Node and Enable System Proxy

Make sure both of the following are ready:

1. **Enable Tun Mode and System Proxy**: On the top toolbar of the main screen, check **Tun Mode** and **System Proxy** (the title bar will show `[Tun+System Proxy]`)
2. **Select and start the node**: In the server list, **check** the IPWeb node (a ✓ appears on the left), then **right-click the node → select Start**

**After a successful start:**

- The title bar shows `[Admin] [Tun+System Proxy] NekoBox ... [Socks] proxy1@Default`
- The node displays **test results and traffic data** on the right (e.g. `41.54 KiB ↑ | 162.74 KiB ↓`)
- The log area at the bottom shows connection activity

![NekoBox start node](https://oss.ipweb.cc/docs/imgs/2026/07/nekoray-step4.png)

Open a browser and visit `https://ipinfo.io` or another IP lookup site to verify the returned IP matches your purchased proxy region. If it displays correctly, configuration is successful.

![IPinfo result example — showing proxy IP location](https://oss.ipweb.cc/docs/imgs/2026/07/ipinfo-result.png)

> If the IP check shows your local IP, troubleshoot in this order:
>
> 1. Confirm **Tun Mode** and **System Proxy** are both enabled
> 2. Confirm the node in the server list is checked and started
> 3. Confirm the address, port, username, and password in the node settings exactly match what IPWeb provided
> 4. Confirm the protocol type (Socks / HTTP) matches what you selected when purchasing

### 5. Routing Rules for Split Traffic (Optional)

If you want only specific traffic to use the IPWeb proxy while other traffic continues through your existing node or direct connection, use NekoBox's **routing rules** feature. Click **Settings** in the top menu bar and add custom rules on the **Routing Rules** tab, for example:

| Rule Example | Meaning |
| --- | --- |
| Destination domain `target-website.com` → IPWeb node | Only requests to this domain go through the proxy |
| Destination IP range `10.0.0.0/8` → Direct | Local network addresses bypass the proxy |
| Default → Direct / other node | Route remaining traffic as needed |

Only traffic matching the rules will be sent through the IPWeb proxy; all other traffic keeps its original path.

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
> - **Help docs**: [https://docs.ipweb.cc/](https://docs.ipweb.cc/)
>
> For more client configuration guides (Clash Verge, v2rayN, etc.), visit the [IPWeb Proxy IP & Technical Articles Hub](https://ipweb.cc/blog/).

