---
sidebar_position: 1
sidebar_label: Clash Verge Configuration Guide
description: Complete guide to configuring IPWeb static residential proxies in Clash Verge.
---
# Clash Verge Configuration Guide

***If you already have a working overseas network environment, follow the "Clash Verge Configuration" section. If you do not have one, follow the "Chain Proxy" section first.***

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

### 3. Purchase Static Native Proxies

After logging in to the IPWeb dashboard, go to **Proxy Products** → **Static Native Proxy** → **Buy Proxy** in the left navigation.

On the purchase page, select **Dedicated** or **Shared** based on your needs, then choose whether to enable **Custom purchase**.

![IPWeb Static Native Proxy Buy Proxy page](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-buy-proxy-custom-dedicated-steps-en.png)

Confirm these parameters when purchasing:

| Parameter | Description |
| --- | --- |
| Dedicated / Shared | Dedicated proxies are used exclusively by the current account; Shared proxies use a shared resource pool |
| Country / Region | Select the proxy exit location; available options follow current dashboard resources |
| Use case | Optional—select when you have a specific scenario; leave blank if not needed |
| UDP | Enable or disable based on your software, protocol, and business needs |
| Bandwidth | Choose the bandwidth specification for this proxy instance |
| Connections (QPS) | Choose a specification based on concurrent request needs |
| IP period | Select the service duration for the proxy IP |
| IP quantity | Enter how many IPs to purchase |

If you turn off **Custom purchase**, the page switches to preset package mode, where bandwidth, QPS, UDP, and similar options are predefined by the package.

After confirming country/region, specifications, period, IP quantity, and amount due, click **Place Order**. After the system creates the order, choose a supported payment method and complete payment. Line provisioning usually takes about **3–5 minutes**—wait for the system to finish allocating resources.

For details on Dedicated/Shared, Custom purchase, specifications, and payment, see the [IPWeb Static Native Proxy User Guide](/static-native-user-guide/).


### 4. View Proxy Connection Details

After your Static Native Proxy has been purchased and activated, go to **Proxy Products** → **Static Native Proxy** → **My IPs** in the left navigation to view purchased proxy resources under the current account.

![IPWeb Static Native Proxy My IPs page](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-my-ips-en.png)

In the proxy list, confirm the details needed for Clash Verge configuration:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used for the proxy connection;
- **Username / Password**: Credentials used to authenticate the proxy connection;
- **Status**: Confirm the proxy resource is currently available.

The page also shows country/region, bandwidth, Shared/Dedicated, Connections (QPS), expiration/renewal, UDP, and other fields for verifying the resource. When configuring Clash Verge, use the **proxy IP, port, username, and password** shown here.

For proxy filtering, credential export, renewal, and other management actions, see the [IPWeb Static Native Proxy User Guide](/static-native-user-guide/).


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

## Chain Proxy

If your local network cannot connect directly to overseas proxy servers, you can configure a two-hop chain in Clash Verge: first connect through a reachable overseas proxy as the upstream hop, then connect to your target static residential proxy.

The full path is:

> **Local machine -> Upstream proxy (`proxy1`) -> Downstream proxy (`proxy2`) -> Target website**

In this setup, `proxy1` only establishes stable overseas connectivity, while `proxy2` is the final business egress IP. After setup, IP check tools should show `proxy2`'s location instead of your local IP or `proxy1`'s egress.

### 1. Prepare Two Proxy Nodes

Before setup, prepare these two nodes:

| Node | Purpose | Recommendation |
| --- | --- | --- |
| `proxy1` | Upstream proxy for overseas connectivity | Use a stable, low-latency overseas node reachable from your local network |
| `proxy2` | Final business egress IP | Use the static residential proxy from your required country/region |

### 2. Add Both Nodes to One Configuration File

Create a local YAML file and put both nodes in the same `proxies` list. Replace placeholders with your real values:

```yaml
proxies:
  # Hop 1: reachable upstream overseas proxy
  - name: "proxy1"
    type: socks5
    server: your upstream proxy server
    port: your port
    username: "your upstream username"
    password: "your upstream password"
    udp: true

  # Hop 2: target static residential proxy
  - name: "proxy2"
    type: http
    server: your downstream proxy server
    port: your port
    username: "your downstream username"
    password: "your downstream password"
```

Create/import the local profile as in the steps above, then activate it with **Use**.

> Notes:
> - `type` must match the real protocol of each node.
> - `port` must be your real port value.
> - If your file already has `proxies:`, append missing nodes to the existing list (do not create a second `proxies:` block).

### 3. Build the Chain in Correct Order

Open **Proxies** in Clash Verge and do the following:

1. Click **Chain Proxy** in the top-right corner.
2. Click `proxy1` first to add it as hop **1**.
3. Click `proxy2` next to add it as hop **2**.
4. Verify the order is `1 proxy1`, `2 proxy2`.
5. Click **Connect**.

> Do not reverse the order. If you added in the wrong order, remove and re-add.

### 4. Enable System Proxy and Verify Final Egress

Go back to **Home** and make sure **System Proxy** is enabled. Then open `https://ipinfo.io` (or another trusted IP checker) and verify:

- The current IP matches the target IP purchased from IPWeb
- Country/region, city, and ASN match your purchased line
- Refreshing does not fall back to your local IP

If the page shows `proxy2`'s target IP, chain proxy is working.

### 5. Troubleshooting

| Issue | What to check |
| --- | --- |
| `proxy1` and `proxy2` not shown | Check YAML indentation, save the file, and reactivate the profile |
| Node has no latency / connection fails | Recheck server, port, protocol, username, and password for both nodes |
| Still showing local IP | Ensure profile is updated, system proxy is on, and **Connect** was clicked in Chain Proxy mode |
| Shows upstream IP | Check whether `proxy2` is missing and whether order is `proxy1 -> proxy2` |
| Connection works but slow | Use a lower-latency, more stable upstream node and avoid extra proxy layers |

> Button names and positions may vary by Clash Verge version. Please follow your current UI.

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
> For more client configuration guides (NekoBox, v2rayN, etc.), visit the [IPWeb Proxy Configuration Tutorials](https://docs.ipweb.cc/category/configuration-guide/).

