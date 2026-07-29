---
sidebar_position: 3
sidebar_label: NekoBox Configuration Guide (Windows)
description: Complete guide to configuring IPWeb static residential proxies in NekoBox (Windows).
---
# NekoBox Configuration Guide

***If you already have a working overseas network environment, follow the "NekoBox Configuration" section. If you do not have one, follow the "Chain Proxy" section first.***

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

### 3. Purchase a Static Residential Proxy Plan

After logging in to IPWeb, select the static residential proxy product you want to purchase from the left dashboard.

Static residential proxies are billed **by IP count and subscription duration**. After purchase, you receive fixed residential IP addresses.

Step 1: In the left navigation bar, click **Static Residential Proxy** → **Purchase Proxy**.

Step 2: Configure the following parameters:

| Parameter | Description |
| -------- | -------------------------------------------- |
| Country / Region | Supports precise targeting by country / city |
| IP Quality & Use Case | Match IP quality to your business needs (Basic / Standard / Premium) to ensure resource purity meets platform requirements |
| Protocol & Features | SOCKS5 / HTTP delivery by default; IPs are **dedicated** for secure business isolation |
| Subscription Duration | Choose a period from **7 days to 1 year** as needed |
| Purchase Quantity | Enter the number of fixed IPs you need |

![Static proxy parameter configuration](https://oss.ipweb.cc/docs/imgs/2026/07/image4.png)

Step 3: Confirm the order amount and complete payment using a supported payment method on the page.

### 4. Top Up & Payment

IPWeb supports the following payment methods:

| Payment Method | Description |
| ---------- | ----------- |
| Alipay (HK) | Settled in HKD, instant credit |
| USDT-TRC20 | Cryptocurrency payment |
| Bank Transfer | Available for enterprise customers |

Go to **Finance > Top Up Center** in the dashboard and select your payment method. Enterprise customers with custom requirements can contact support for a dedicated quote.

> Dynamic residential proxies are billed by traffic usage. After topping up, monitor your remaining balance to avoid service interruption due to insufficient funds.

### 5. Get Proxy Connection Details

After purchase, go to **Purchased Line Details** in the left navigation bar to view your dedicated:

- **Static IP address**
- **Port number**
- **Credentials (username / password)**

You can use this information directly in your client configuration.

![Purchased line details](https://oss.ipweb.cc/docs/imgs/2026/07/image7.jpeg)


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

## Chain Proxy

If your current network environment cannot connect directly to the target country/region proxy, you can configure a chain in NekoBox: first establish a tunnel through a reachable overseas upstream proxy, then connect to the target downstream proxy.

Path:

> **Local machine -> Upstream proxy -> Downstream proxy -> Target website**

### 1. Prepare Two Proxy Nodes

Prepare address, port, username, and password for:

| Role | Purpose | Example |
| --- | --- | --- |
| Upstream proxy | First hop that can be reached from current network | `proxy1-hk` |
| Downstream proxy | Final business egress in target country/region | `proxy2-us` |

### 2. Add Upstream Proxy

Right-click blank area in server list -> **Manual Input**, then fill:

| Field | Value |
| --- | --- |
| Type | `Socks` |
| Name | `proxy1-hk` |
| Address | upstream server |
| Port | upstream port |
| Version | `5` |
| Username / Password | upstream credentials |

Save it, and test connectivity first.

### 3. Add Downstream Proxy

Again open **Manual Input** and fill downstream node details:

| Field | Value |
| --- | --- |
| Type | protocol matching downstream proxy (e.g. `Socks`) |
| Name | `proxy2-us` |
| Address | downstream server |
| Port | downstream port |
| Version | `5` for SOCKS5 |
| Username / Password | downstream credentials |

Save and confirm both nodes appear in the server list.

### 4. Create Chain and Set Order

Right-click blank area -> **Manual Input**, then:

1. Set **Type** to **Chain Proxy**
2. Name it `chain-proxy`
3. Click **Select Config** and add `proxy1-hk` and `proxy2-us`
4. Ensure order is `proxy1-hk` on top, `proxy2-us` below
5. Click **OK**

> In NekoBox, chain traffic goes top-to-bottom and the last node is the final egress. Keep `proxy1-hk -> proxy2-us`.

### 5. Start Chain Proxy

On main screen:

1. Select `chain-proxy`
2. Right-click -> **Start**
3. Enable **Tun Mode** and **System Proxy**
4. Check logs and traffic counters

> Start `chain-proxy` itself, not standalone `proxy1-hk`/`proxy2-us`.

### 6. Verify Final Egress IP

Visit `https://ipinfo.io` and confirm:

- IP equals downstream (`proxy2-us`) IP
- Country/region matches target line
- Not your local IP, not upstream egress IP

If yes, chain proxy is successful.

### 7. Troubleshooting

| Issue | What to check |
| --- | --- |
| Chain fails to start | Recheck both nodes' server/port/protocol/credentials; test upstream first |
| Downstream times out | Ensure upstream is reachable; try a lower-latency upstream node |
| Detected IP is upstream | Check chain list/order; must be `proxy1-hk -> proxy2-us` |
| Detected IP is local | Ensure `chain-proxy` is started and both Tun/System Proxy are enabled |
| Slow speed | One extra hop adds latency; optimize upstream distance and stability |

> Button names or positions may vary by NekoBox version. Follow your current UI.

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
> For more client configuration guides (Clash Verge, v2rayN, etc.), visit the [IPWeb Proxy Configuration Tutorials](https://docs.ipweb.cc/category/configuration-guide/).

