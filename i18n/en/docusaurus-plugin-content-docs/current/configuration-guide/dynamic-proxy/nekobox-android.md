---
sidebar_position: 4
sidebar_label: NekoBox Configuration Guide (Android)
description: Complete guide to configuring IPWeb dynamic residential proxies in NekoBox (Android).
---
# NekoBox Dynamic Residential Proxy Guide (Android)

***If you already have a working overseas network environment, follow the "NekoBox Configuration" section. If you do not have one, follow the "Chain Proxy" section first.***

IPWeb provides **70 million+ clean residential IPs** worldwide across **220+ countries/regions**, supporting HTTP, HTTPS, and SOCKS5 for use cases such as data collection, account operations, and ad verification. This guide walks you through registering, generating dynamic residential proxies, and configuring them in **NekoBox (Android)**.

> Need help? Contact us anytime: Telegram [t.me/ipwebadmin](https://t.me/ipwebadmin) | Phone 13064703052 | QQ (scan QR code) | WeChat (scan QR code)
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="QQ QR code" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="WeChat QR code" width="160" />

## Getting Started

### 1. Create an Account

Step 1: Open the IPWeb website at `https://ipweb.cc` and click **Sign Up** in the top navigation bar (existing users can click **Log In**).

![IPWeb homepage](https://oss.ipweb.cc/docs/imgs/2026/07/image1.png)

Step 2: On the registration page, enter your **email address** and **password**; or use **Sign up with Gmail** (recommended) to skip setting a separate password.

![IPWeb sign up / log in](https://oss.ipweb.cc/docs/imgs/2026/07/image2.png)

Step 3: Check your inbox for a verification email and click the **confirmation link**. If you do not see the email, check your spam folder. (Some providers may delay delivery—wait a few minutes.)

### 2. Claim Trial Traffic

After registration, log in to the IPWeb dashboard at `https://user.ipweb.cc` for the first time and contact support to receive **free trial traffic** for all proxy types.

> New users can test proxy performance with complimentary traffic before choosing a paid plan.

### 3. Purchase Dynamic Proxy Traffic

After logging in to the IPWeb dashboard, go to **Proxy Products** → **Dynamic Proxy** in the left navigation. The default page is **Traffic Top-up**.

Dynamic proxies are billed by traffic usage. Before purchasing, choose a traffic package that matches your needs.

![IPWeb Dynamic Proxy Traffic Top-up page](https://oss.ipweb.cc/docs/imgs/2026/08/dynamic-traffic-recharge-en.png)

Focus on the following when purchasing:

| Item | Description |
| --- | --- |
| Traffic package | Choose the traffic volume you need based on expected usage. Traffic is billed per GB |
| Unit price | Unit price may vary by package size—larger volume usually means a lower unit price |
| Custom traffic package | If preset packages do not fit, create a custom package using the options on the page |

After selecting traffic, go to the order confirmation page and verify the **unit price, traffic volume, and amount**. Then choose a supported payment method and complete payment.

![IPWeb Dynamic Proxy order confirmation page](https://oss.ipweb.cc/docs/imgs/2026/08/dynamic-order-confirmation-en.png)

When payment succeeds, the corresponding traffic is credited to your dynamic proxy account under the order rules and can be used to generate and use proxies.

For more details on dynamic proxy traffic purchase, payment, and account traffic, see the [IPWeb Dynamic Proxy User Guide](/user-guide/).


### 4. Get Dynamic Proxy Connection Details

After topping up traffic, go to **Proxy Products** → **Dynamic Proxy** → **Get Proxy** in the left navigation to generate proxy connection details based on your needs.

![IPWeb Dynamic Proxy Get Proxy page](https://oss.ipweb.cc/docs/imgs/2026/08/dynamic-get-proxy-en.png)

Before generating proxies, configure these parameters:

| Parameter | Description |
| --- | --- |
| Country / Region, State, City | Select the target exit IP location; if you do not need precise targeting, select only the country or region |
| Proxy server | Choose the proxy server node used to access the IPWeb dynamic proxy network |
| IP session duration | Set how long the exit IP stays valid in the current proxy session; dynamic proxies remain dynamic IP resources |
| Proxy count | Number of proxy lines to generate this time |
| Proxy protocol | Supports HTTP, HTTPS, and SOCKS5 at the same time—no need to switch protocols when generating |

After configuring, click **Generate Proxy**. Generated connection details use this format:

```text
proxy_server:port:proxy_account:password
```

When configuring NekoBox, use the **proxy server, port, proxy account, and password**.

For details on region codes, proxy account structure, SID, custom proxy accounts, and proxy server selection, see the [IPWeb Dynamic Proxy User Guide](/user-guide/).

## NekoBox Configuration

This section covers the **NekoBox** client on **Android**. NekoBox has a clean UI and supports SOCKS5 / HTTP, making it suitable for quick residential proxy setup.

Before configuring, make sure you generated and downloaded the dynamic proxy TXT file, have the connection details (server, port, username, password), and have NekoBox installed on Android.

### 1. Prepare Proxy Connection Details

Confirm you have:

- **Proxy server address**
- **Port number**
- **Username**
- **Password**

### 2. Add an IPWeb Proxy Node

Open **NekoBox** and follow these steps:

#### ① Tap the add button

On the main screen, tap the file icon with **+** in the top-right corner to open the node type menu.

![Tap the add button in the top-right corner of NekoBox](https://oss.ipweb.cc/docs/imgs/neko-android-step1-add.png)

#### ② Select the proxy protocol

Choose the protocol that matches what you obtained from IPWeb. Screenshots in this guide use **HTTP**, so tap **HTTP**.

![Select HTTP in the node type menu](https://oss.ipweb.cc/docs/imgs/neko-android-step2-select-http.png)

> ⚠️ The protocol must match IPWeb: choose **HTTP** for HTTP proxies, or **SOCKS** for SOCKS5. A mismatch will prevent connection.

#### ③ Fill in server settings

On the **Server Configuration** page:

| Field | Value |
| --- | --- |
| **Profile name** | `proxy1` or any recognizable name |
| **Server** | Your proxy server address |
| **Server port** | Your port (e.g. `7778`) |
| **Username (optional)** | Your proxy username |
| **Password (optional)** | Your proxy password |

IPWeb dynamic residential proxies usually require authentication, so fill in username and password even if the UI marks them optional. Leave other options at defaults; unless required, keep **Transport encryption** and **Multiplexing** off.

When finished, tap **✓** in the top-right corner to save.

![Enter HTTP server, port, and credentials](https://oss.ipweb.cc/docs/imgs/neko-android-step3-config-proxy1.png)

### 3. Start the Node and Establish a VPN Connection

After saving, the node appears on the main screen. Tap it so a pink selection mark appears on the left, then tap the **paper airplane** button at the bottom center to connect.

On first launch, Android will request VPN permission—tap **OK** / **Allow**. When connected:

- A **VPN** icon appears in the status bar
- Latency shows on the right of the node (e.g. `292ms`)
- The bottom of the screen shows **Connected** and handshake time
- The paper airplane indicates connected state

![Start the node and confirm connection](https://oss.ipweb.cc/docs/imgs/neko-android-step4-connect.png)

Open a browser and visit `https://ipinfo.io` or another IP lookup site. Confirm the IP and region match the country/region you selected when generating the proxy. If correct, setup succeeded.

![Check proxy exit IP](https://oss.ipweb.cc/docs/imgs/neko-android-step9-ip-check.png)

> If the check shows your local IP, verify in order:
>
> 1. NekoBox shows **Connected** and the status bar has a VPN icon
> 2. The selected node is the IPWeb node you just added
> 3. Server, port, username, and password match IPWeb exactly
> 4. Protocol (SOCKS / HTTP) matches the dashboard
> 5. You allowed the Android VPN permission prompt

### 4. Add or Switch Multiple Nodes (Optional)

If your TXT file contains multiple dynamic proxies, repeat the steps above for each one. Use distinct names such as `proxy0` and `proxy1`.

![Add a second HTTP proxy node](https://oss.ipweb.cc/docs/imgs/neko-android-step5-config-proxy0.png)

To switch nodes, disconnect first, tap the target node (pink mark on the left), then tap the paper airplane again.

## Chain Proxy

If your local network cannot reach the target country/region proxy directly, configure a **chain proxy** in NekoBox: first connect through a reachable overseas upstream proxy, then to the target downstream proxy.

Path:

> **Device -> Upstream proxy (overseas) -> Downstream proxy (target country/region) -> Target website**

For example, use a Hong Kong proxy as upstream and a US dynamic residential proxy as downstream. The final egress should be the **US downstream IP**, not your local public IP or the Hong Kong upstream IP. The downstream IP still rotates based on the session duration you set when generating it.

### 1. Prepare Two Proxy Nodes

Prepare address, port, username, and password for:

| Role | Purpose | Example name |
| --- | --- | --- |
| **Upstream proxy** | First hop reachable from your current network | `proxy0` |
| **Downstream proxy** | Final business egress in the target country/region | `proxy1` |

Prefer a nearby, low-latency, stable node as upstream; choose downstream by business location needs.

> This section uses two HTTP nodes. For SOCKS5, select **SOCKS** and keep the protocol consistent with your provider.

### 2. Add Upstream and Downstream Nodes Separately

Using the earlier “Add an IPWeb Proxy Node” steps, create upstream `proxy0` and downstream `proxy1`. Fill each node’s server, port, username, and password, then tap **✓** to save.

Both nodes should appear on the main screen. Optionally start each alone first to verify credentials and protocol.

> Upstream is the first hop. If it fails or is too slow, downstream will also fail. Confirm upstream works in your current network first.

### 3. Create the Chain Proxy

On the main screen, tap the top-right **+** file icon, scroll the type list, and select **Chain Proxy**.

![Select Chain Proxy in the add menu](https://oss.ipweb.cc/docs/imgs/neko-android-step6-chain-menu.png)

On the **Chain Settings** page:

1. Set **Profile name** to `chain proxy` (or another clear name)
2. Tap **Add server profile**
3. Add upstream and downstream nodes in order
4. Confirm order is `proxy0 → proxy1` (upstream above, downstream below)
5. Tap **✓** to save

![Add two nodes and set chain order](https://oss.ipweb.cc/docs/imgs/neko-android-step7-chain-settings.png)

> ⚠️ Keep order as **upstream → downstream**, with downstream as final egress. `proxy0` / `proxy1` are only example names—follow your actual node roles to avoid wrong exit IP or connection failure.

### 4. Start the Chain Proxy

On the main screen, select `chain proxy` (pink mark on the left), then tap the bottom **paper airplane** button.

When connected, latency appears next to `chain proxy`, the bottom shows **Connected**, and the status bar shows VPN.

![Select and start chain proxy](https://oss.ipweb.cc/docs/imgs/neko-android-step8-chain-connected.png)

> Start the `chain proxy` entry itself—not standalone `proxy0` or `proxy1`. NekoBox calls both nodes in the chain order automatically.

### 5. Verify Final Egress IP

Visit `https://ipinfo.io` or another trusted IP checker and confirm:

- Displayed IP matches the downstream proxy IP
- Country/region matches the target you selected when generating the dynamic proxy
- Result is neither your local public IP nor the upstream egress IP

![Chain proxy exit IP check example](https://oss.ipweb.cc/docs/imgs/neko-android-step9-ip-check.png)

If the result matches the downstream target region, chain proxy is working. Dynamic residential IPs may change on the next check according to session duration—that is expected as long as region and egress role stay correct. Extra hop latency is also normal.

### 6. Troubleshooting

| Issue | What to check |
| --- | --- |
| Chain fails to start | Recheck both nodes’ server/port/protocol/credentials; test upstream alone first |
| Downstream always times out | Confirm upstream is reachable; try a lower-latency overseas upstream |
| Detected IP is upstream | Check whether downstream is missing or order is reversed; must be upstream → downstream |
| Detected IP is still local | Confirm `chain proxy` is selected and started, VPN permission is granted, and VPN icon is visible |
| Connected but slow | One extra hop adds latency; shorten upstream distance and avoid stacking extra proxies |

> Button names, layout, and VPN prompts may vary by NekoBox or Android version. Use proxies only for lawful purposes and follow target site terms and local laws.

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
> - **Help docs**: [https://docs.ipweb.cc/](https://docs.ipweb.cc/)
>
> For more client configuration guides (Clash Verge, v2rayN, etc.), visit [IPWeb Proxy Configuration Tutorials](https://docs.ipweb.cc/category/configuration-guide/).
