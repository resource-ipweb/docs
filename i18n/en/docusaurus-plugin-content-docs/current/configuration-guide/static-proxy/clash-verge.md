---
sidebar_position: 1
sidebar_label: Clash Verge Configuration Guide
description: Complete guide to configuring IPWeb static residential proxies in Clash Verge.
---
# Clash Verge Configuration Guide

***Before using IPWeb proxy services, make sure your network can access international resources normally. If you encounter connection issues, check your local network or contact customer support for assistance.***

IPWeb provides **70 million+ clean residential IPs** worldwide across **220+ countries/regions**, supporting HTTP, HTTPS, and SOCKS5 protocols for use cases such as data collection, account operations, and ad verification. This guide walks you through the full workflow—from registration and purchase to configuring proxies in the **Clash Verge** client.

> Need help? Contact us anytime: Telegram [t.me/ipwebadmin](https://t.me/ipwebadmin) | Phone 13064703052 | QQ (scan QR code) | WeChat (scan QR code)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ QR code" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="WeChat QR code" width="160" />


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

### 3. Purchase a Static Residential Proxy Plan

After logging in to IPWeb, select the static residential proxy product you want to purchase from the left dashboard.

Static residential proxies are billed **by IP count and subscription duration**. After purchase, you receive fixed residential IP addresses.

Step 1: In the left navigation bar, click **静态住宅代理 (Static Residential Proxy)** → **购买代理 (Purchase Proxy)**.

Step 2: Configure the following parameters:

| Parameter | Description |
| -------- | -------------------------------------------- |
| Country / Region | Precise targeting by country or city |
| IP Quality & Use Case | Match IP quality to your workload (Basic / Standard / Premium) to meet platform requirements |
| Protocol & Features | SOCKS5 / HTTP delivery by default; IPs are **dedicated** for secure business isolation |
| Subscription Duration | Choose from **7 days to 1 year** as needed |
| Quantity | Enter the number of fixed IPs you need |

![Static proxy parameter configuration](https://oss.ipweb.cc/docs/imgs/2026/07/image4.png)

Step 3: Confirm the order total and complete payment using a supported method on the checkout page.

### 4. Top Up & Payment

IPWeb supports the following payment methods:

| Payment Method | Description |
| ---------- | ----------- |
| Alipay (HK) | Settled in HKD, instant credit |
| USDT-TRC20 | Cryptocurrency payment |
| Bank Transfer | Available for enterprise customers |

Complete payment in the dashboard under **财务管理 > 充值中心 (Finance > Top-Up Center)**. Enterprise customers with custom requirements can contact support for a dedicated quote.

> Dynamic residential proxies are billed by traffic usage. After topping up, monitor your remaining balance to avoid service interruption due to insufficient funds.

### 5. Retrieve Proxy Connection Details

After purchase, go to **已购线路明细 (Purchased Line Details)** in the left navigation bar to view your dedicated:

- **Static IP address**
- **Port number**
- **Credentials (username / password)**

You can use these details directly in your client configuration.

![Purchased line details](https://oss.ipweb.cc/docs/imgs/2026/07/image7.jpeg)


## Configure IPWeb Proxies in Clash Verge

This guide is written for the **Clash Verge** client. Clash Verge is a Windows / macOS proxy tool built on the Clash Meta core. Its interface and navigation differ significantly from the original Clash client—the steps below apply specifically to **Clash Verge**.

Before configuring, complete the purchase workflow in the previous section and have your proxy connection details ready (proxy server address, port, username, and password).

### 1. Prepare Proxy Connection Details

Confirm you have the following four items:

- **Proxy server address**
- **Port number**
- **Username**
- **Password**

> If you purchased **dynamic residential proxies**, these details are in the txt file you generated and downloaded; for **static residential proxies**, view them under **已购线路明细 (Purchased Line Details)**.

### 2. Edit the Clash Verge Configuration File

Open the **Clash Verge** client and follow these steps:

**① Create a local YAML configuration file**

Create a new text file on your computer and paste the content below. Replace the placeholders with the actual values from Section 3 (keep the English quotation marks):

```yaml
proxies:
  - name: "proxy1"
    type: socks5
    server: your proxy server address
    port: your port number
    username: your username
    password: your password

proxy-groups:[]
```

> If Clash Verge already has other configurations, you can merge the `proxies:` and `proxy-groups:` sections above into your existing file and keep your original nodes.

**② Create a new profile and import the configuration**

1. Click **订阅 (Profiles)** in the left navigation bar, then click **新建 (New)** on the right.

![Open Profiles and click New](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step1.png)

1. In the **新建配置 (New Profile)** dialog:
   - **类型 (Type)**: Select `Local`
   - **名称 (Name)**: Enter `IPWeb` (or another name you can easily recognize)
   - Click **选择文件 (Choose File)** and select the YAML file you just created
   - Click **保存 (Save)**

![Create local profile and select file](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2.png)

**③ View the imported configuration**

After a successful import, right-click the IPWeb profile card and select **编辑文件 (Edit File)** from the context menu to view the proxy settings you entered. You can also edit them here if needed.

![View / edit YAML configuration file](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step3.png)

**④ Activate the profile**

Return to the Profiles page, find the **IPWeb** profile card, right-click it, and select **使用 (Use)** to activate the configuration.

![Right-click IPWeb profile and select Use to activate](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step2-5.png)

### 3. Switch to the IPWeb Proxy Node

In the left navigation bar, click **代理 (Proxies)**. In the proxy group list, find the **IPWeb node** you added (`proxy1`) and select it.

![Select the IPWeb node on the Proxies page](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step4.png)

### 4. Enable System Proxy and Verify

Confirm both of the following are ready:

1. **System proxy is enabled**: Click **首页 (Home)** in the left navigation bar and verify that the **系统代理 (System Proxy)** toggle is **on** in the network settings area
2. **Correct node is active**: The right side of the Home page should show the IPWeb node name you selected

![Confirm system proxy and node status on Home](https://oss.ipweb.cc/docs/imgs/2026/07/clash-verge-step6.png)

Open a browser and visit `https://ipinfo.io` or another IP lookup site to check whether the returned IP matches the proxy region you purchased. If it displays correctly, configuration is successful.

![IPinfo result example — showing proxy IP location](https://oss.ipweb.cc/docs/imgs/2026/07/ipinfo-result.png)

> If the IP check shows your local IP, verify: ① the IPWeb node is selected on the Proxies page; ② the system proxy toggle is on on the Home page; ③ placeholders in the configuration file have been replaced with actual connection details.

### 5. Rule-Based Split Routing (Optional)

If you want only specific traffic to use the IPWeb proxy while other traffic continues through your existing nodes or direct connection, add split-routing rules in the `rules` section of your configuration:

```yaml
rules:
  - DOMAIN-SUFFIX,target-website.com,proxy1
  - IP-CIDR,10.0.0.0/8,DIRECT
  - MATCH,Proxy
```

With this setup, only requests to the target domain (e.g., `target-website.com`) are sent through the IPWeb proxy via the `proxy1` node; all other traffic follows your existing rules.

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
> For more client configuration guides (NekoBox, v2rayN, etc.), visit the [IPWeb Proxy IP & Technical Articles Hub](https://ipweb.cc/blog/).

