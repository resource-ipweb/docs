---
sidebar_position: 6
sidebar_label: ClonBrowser Configuration Guide
description: Complete guide to configuring IPWeb static native proxies in ClonBrowser.
---
# ClonBrowser + IPWeb Static Native Proxy Setup Guide

***Before using IPWeb proxy services, make sure your current network environment can connect to the proxy server normally. If you encounter connection issues, check your local network or contact customer support for assistance.***

IPWeb provides **70M+ clean residential IPs** across **220+ countries and regions**, with support for HTTP, HTTPS, and SOCKS5 protocols. It can support a wide range of use cases, including data collection, account management, and ad verification.

Among them, **Static Native Proxies** provide stable, fixed outbound IP addresses, making them better suited for use cases that require consistent network environments and reliable connections. This guide covers the complete process, from registration, free trial, and purchasing a Static Native Proxy to configuring and verifying an IPWeb proxy in the **ClonBrowser fingerprint browser**.

> **Contact us anytime if you need help:**
>
> - Telegram: [t.me/ipwebadmin](https://t.me/ipwebadmin)
> - Phone: `13064703052`
> - QQ: Scan the QR code to add us
> - WeChat: Scan the QR code to add us
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="IPWeb QQ QR code" width="160" /> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="IPWeb WeChat QR code" width="160" />

## Basic Setup

### 1. Create an Account

Open the IPWeb website at `https://ipweb.cc`, then click [**sign up**](https://user.ipweb.cc/console/sign-up) in the top navigation bar. If you already have an account, click [**sign in**](https://user.ipweb.cc/console/sign-in) instead.

On the registration page, **Email Register** is available by default. Enter your account name/email address, email verification code, password, and password confirmation. Click **Send Code**, then check your email for the verification code. After completing the required fields, agree to the Terms of Service and Privacy Policy, then click **Sign Up** to complete registration. You can also switch to **Mobile Register** and follow the on-screen instructions to register with your mobile number.

![IPWeb email registration page](https://oss.ipweb.cc/docs/imgs/2026/09/ipweb-sign-up-en.png)

If you already have an account, go directly to the sign-in page and log in with your account name/email address and password. You can also switch to phone number login.

The sign-in page also provides a **Sign in with Google** option, allowing you to quickly register or log in with your Google account without entering separate email registration details.

![IPWeb account sign-in page](https://oss.ipweb.cc/docs/imgs/2026/09/ipweb-sign-in-en.png)

### 2. Claim Free Trial Traffic

After registration, log in to the [IPWeb User Dashboard](https://user.ipweb.cc/console/sign-in) for the first time and contact customer support to receive **free trial traffic** for testing all proxy types.

> New users can use the trial traffic to test proxy performance first, then choose a paid plan after confirming that it meets their needs.

### 3. Purchase a Static Native Proxy

After logging in to the IPWeb User Dashboard, go to **Proxy Products** → **Static Native Proxy** → **Buy Proxy** from the left-hand navigation menu.

On the purchase page, choose **Dedicated** or **Shared** based on your requirements, and decide whether to enable **Custom purchase**.

![IPWeb Static Native Proxy purchase page](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-buy-proxy-custom-dedicated-steps-en.png)

When purchasing, make sure to review the following parameters:

| Parameter | Description |
| --- | --- |
| Dedicated / Shared | Dedicated proxies are used exclusively by the current account, while shared proxies use a shared resource pool |
| Country / Region | Select the desired proxy exit location. Available locations depend on the resources currently shown in the dashboard |
| Use Case | Select a use case if you have a specific business scenario; otherwise, you can leave it unselected |
| UDP | Enable or disable UDP based on the software, protocol, and business requirements you use |
| Bandwidth | Select the bandwidth specification required for the current proxy instance |
| Connections (QPS) | Select the appropriate specification based on your actual concurrent request requirements |
| IP Subscription Period | Select the service period for the proxy IP |
| Number of IPs | Enter the number of IPs you want to purchase |

If **Custom purchase** is disabled, the page switches to preset package mode, where bandwidth, QPS, UDP, and other parameters are determined by the selected package.

After confirming that the country/region, specifications, subscription period, number of IPs, and total amount are correct, click **Place Order**. Once the order is generated, select one of the supported payment methods and complete the payment. After the order is confirmed, line provisioning usually takes about **3–5 minutes**. Please wait for the system to complete resource provisioning.

For detailed information about Dedicated/Shared proxies, Custom Purchase, specification options, and the payment process, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

### 4. View Proxy Connection Details

After your Static Native Proxy has been purchased and activated, go to **Proxy Products** → **Static Native Proxy** → **My IPs** from the left-hand navigation menu to view the proxy resources purchased under the current account.

![IPWeb purchased Static Native Proxy IPs page](https://oss.ipweb.cc/docs/imgs/2026/09/static-native-my-ips-en.png)

In the proxy list, pay particular attention to the following details, which will be used later when configuring ClonBrowser:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used to connect to the proxy;
- **Username / Password**: The authentication credentials used to connect to the proxy;
- **Status**: Make sure the current proxy resource is available.

The page also displays information such as country/region, bandwidth, Shared/Dedicated status, connections (QPS), expiration/renewal, and UDP. These details can be used to verify the current proxy resource. When configuring ClonBrowser later, you will mainly use the **proxy IP, port, username, and password** shown here.

For information about proxy filtering, account export, renewals, and other management operations, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

## Configure IPWeb Proxy in ClonBrowser

After completing the steps above and obtaining the IPWeb proxy server address, port, username, and password, you can add the proxy to a ClonBrowser browser profile.

### 1. Create a New Browser Profile

Open **ClonBrowser**, go to **Browser** from the left-hand menu, then click **New Browser** in the upper-left corner.

![Create a new browser profile in ClonBrowser](https://oss.ipweb.cc/docs/imgs/2026/09/clonbrowser-1-en.png)

### 2. Enter the IPWeb Proxy Details

On the browser creation page, open the **Proxy** tab at the top, then select **Custom** under **Mode**.

In the proxy settings area, enter the proxy details obtained from the IPWeb dashboard in the previous section:

| ClonBrowser Setting | What to Enter |
| --- | --- |
| **Protocol** | Select the protocol used by the current IPWeb proxy, such as `HTTP`, `HTTPS`, or `SOCKS5`. |
| **Name** | Enter a custom name that makes the proxy easy to identify, such as `IPWeb-US`. |
| **Host** | Enter the proxy server address provided by IPWeb. |
| **Port** | Enter the corresponding proxy port. |
| **Username** | Enter the proxy username provided by IPWeb. |
| **Password** | Enter the corresponding proxy password. |

For example, if the proxy connection details exported from IPWeb are formatted as:

```text
IP:PORT:USERNAME:PASSWORD
```

Enter them in ClonBrowser as follows:

```text
IP        → ClonBrowser "Host"
PORT      → ClonBrowser "Port"
USERNAME  → ClonBrowser "Username"
PASSWORD  → ClonBrowser "Password"
```

If you have already copied the complete proxy information, you can also paste it into the **Parse** field at the top and click **Parse** to let ClonBrowser automatically identify the proxy parameters.

![Enter IPWeb proxy details in ClonBrowser](https://oss.ipweb.cc/docs/imgs/2026/09/clonbrowser-2-en.png)

Options such as **ExpiryTime**, **IP Probe Channel**, and **Remark** can be configured as needed. If you have no specific requirements, leave them at their default settings.

> **Note:** The proxy protocol selected in ClonBrowser must match the protocol actually used by the current IPWeb proxy.

### 3. Check the Proxy Connection

After entering the proxy information, click **Check network** near the bottom of the page.

If the connection is working properly, the page will display **Connect Test Passed!** and show information such as the country/region, city, and time zone associated with the current proxy exit IP.

![Check the IPWeb proxy connection in ClonBrowser](https://oss.ipweb.cc/docs/imgs/2026/09/clonbrowser-3-en.png)

After confirming that the proxy connection is working, click **Create Browser** in the lower-left corner.

### 4. Launch the Browser Profile

After the browser profile is created, ClonBrowser automatically returns to the browser list.

The newly created browser profile will appear in the list together with its proxy protocol and proxy information. Click **Launch** on the right side of the profile to open the browser.

![Launch the browser profile in ClonBrowser](https://oss.ipweb.cc/docs/imgs/2026/09/clonbrowser-4-en.png)

Once the browser is launched, network traffic from that profile will access target websites through the configured IPWeb proxy.

To further confirm that the proxy is working, you can also open `https://ipinfo.io` or another IP-checking website in the current ClonBrowser browser profile and verify that the displayed exit IP matches the IPWeb proxy.

### 5. Troubleshooting

| Issue | What to Check |
| --- | --- |
| Network check fails | Make sure the correct proxy protocol is selected and that the host and port are entered completely. |
| Authentication failed | Recheck that the username and password match the credentials obtained from IPWeb. |
| Browser cannot access the internet | Make sure the current IPWeb proxy is still active, and check whether your local network can connect to the proxy server. |
| The browser shows the local IP after launch | Return to the proxy settings and confirm that the proxy has been saved to the current browser profile. |
| Detected location does not match the expected region | Check whether the IPWeb proxy you entered belongs to the target country/region or city node you purchased. |

> The interface layout or button names may vary slightly between ClonBrowser versions. Refer to the interface shown in your current client. Use proxies only for lawful and compliant business purposes, and comply with the target website's Terms of Service and all applicable local laws and regulations.

---

> If you encounter an issue not covered above, feel free to contact us for technical support:
>
> - **Telegram**: [t.me/ipwebadmin](https://t.me/ipwebadmin)
> - **Phone**: 13064703052
> - **QQ**: Scan the QR code to add us
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-qq.png" alt="IPWeb QQ QR code" width="160" />
>
> - **WeChat**: Scan the QR code to add us
>
> <img src="https://oss.ipweb.cc/docs/imgs/en/2026/07/contact-qcode-email.png" alt="IPWeb WeChat QR code" width="160" />
>
> - **Help Center**: [https://docs.ipweb.cc/](https://docs.ipweb.cc/)
