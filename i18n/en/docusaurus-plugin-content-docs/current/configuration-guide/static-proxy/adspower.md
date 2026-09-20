---
sidebar_position: 5
sidebar_label: AdsPower Configuration Guide
description: Complete guide to configuring IPWeb static native proxies in AdsPower.
---
# AdsPower + IPWeb Static Native Proxy Setup Guide

***Before using IPWeb proxy services, make sure your current network environment can connect to the proxy server normally. If you encounter connection issues, check your local network or contact customer support for assistance.***

IPWeb provides **70M+ clean residential IPs** across **220+ countries and regions**, with support for HTTP, HTTPS, and SOCKS5 protocols. It can support a wide range of use cases, including data collection, account management, and ad verification.

Among them, **Static Native Proxies** provide stable, fixed outbound IP addresses, making them better suited for use cases that require consistent network environments and reliable connections. This guide covers the complete process, from registration, free trial, and purchasing a Static Native Proxy to configuring and verifying an IPWeb proxy in the **AdsPower fingerprint browser**.

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

In the proxy list, pay particular attention to the following details, which will be used later when configuring AdsPower:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used to connect to the proxy;
- **Username / Password**: The authentication credentials used to connect to the proxy;
- **Status**: Make sure the current proxy resource is available.

The page also displays information such as country/region, bandwidth, Shared/Dedicated status, connections (QPS), expiration/renewal, and UDP. These details can be used to verify the current proxy resource. When configuring AdsPower later, you will mainly use the **proxy IP, port, username, and password** shown here.

For information about proxy filtering, account export, renewals, and other management operations, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

## Configure IPWeb Proxy in AdsPower

After completing the steps above and obtaining the IPWeb proxy server address, port, username, and password, you can add the proxy to an AdsPower browser profile.

### 1. Create a New Browser Profile

Open the **AdsPower** client, then click **New Profile** in the upper-left corner.

![Create a new browser profile in AdsPower](https://oss.ipweb.cc/docs/imgs/2026/09/adspower-image1-en.png)

### 2. Enter the IPWeb Proxy Details

On the New Browser Profile page, open the proxy settings area, set **Proxy setting** to **Custom**, then enter the proxy connection details obtained from the IPWeb dashboard in the previous section.

| AdsPower Setting | What to Enter |
| --- | --- |
| **Proxy type** | Select the protocol used by the current IPWeb proxy, such as `HTTP`, `HTTPS`, or `Socks5`. |
| **IP checker** | You can keep AdsPower's default `IP2Location` option to detect the current proxy exit IP and location information. |
| **Host:Port** | Enter the proxy IP address and corresponding port shown on the IPWeb **My IPs** page. |
| **Proxy username** | Enter the proxy username provided by IPWeb. |
| **Proxy Password** | Enter the password associated with the proxy username. |
| **Change IP URL** | If the current proxy does not require a change-IP URL, leave this field blank. |

For example, if the proxy connection details are formatted as:

```text
IP:PORT:USERNAME:PASSWORD
```

Enter them in AdsPower as follows:

```text
IP        → AdsPower "Host"
PORT      → AdsPower "Port"
USERNAME  → AdsPower "Proxy username"
PASSWORD  → AdsPower "Proxy Password"
```

![Enter IPWeb proxy details in AdsPower](https://oss.ipweb.cc/docs/imgs/2026/09/adspower-image2-en.png)

> **Note:** The proxy type selected in AdsPower must match the protocol actually used by the current IPWeb proxy. If the wrong protocol is selected, the connection test may fail even when the server address, port, username, and password are correct.

### 3. Check the Proxy Connection

After entering the proxy information, click **Check Proxy**.

![Check the proxy connection in AdsPower](https://oss.ipweb.cc/docs/imgs/2026/09/adspower-image3-en.png)

If the page displays **Connection test passed!** and successfully retrieves the proxy exit IP, country or region, city, and other location information, the IPWeb proxy has been successfully connected to the current AdsPower browser profile.

You can then verify that the detected exit IP matches the proxy information currently shown in the IPWeb dashboard. If the exit IP and target location match your expectations, continue with the remaining browser fingerprint and account platform settings.

### 4. Save and Launch the Browser Profile

After the proxy test passes, click **OK** at the bottom of the page to save the browser profile.

Return to the **Profiles** page, find the profile you just created, and open it. Once launched, network requests from that browser profile will access target websites through the configured IPWeb proxy.

To further confirm that the proxy is working, you can also open `https://ipinfo.io` or another IP-checking website in the current AdsPower browser profile and verify that the displayed exit IP matches the IPWeb proxy.

### 5. Troubleshooting

If the proxy test fails in AdsPower, check the following:

| Issue | What to Check |
| --- | --- |
| Unable to connect to the proxy | Check that the proxy host and port are entered correctly, and make sure the current IPWeb proxy is still available. |
| Authentication failed | Recheck the proxy username and password provided by IPWeb, and make sure no extra spaces were included when copying them. |
| Connection test keeps timing out | Check whether your local network can connect to the proxy server normally. |
| Credentials are entered but the proxy still does not work | Make sure the proxy type selected in AdsPower matches the protocol actually used by the current IPWeb proxy. |
| The browser shows the local IP after launch | Return to the proxy settings for the current browser profile and confirm that the proxy has been saved and passed **Check Proxy**. |
| Detected location does not match the expected region | Check whether the IPWeb proxy you entered belongs to the target country/region you purchased. |

> The interface layout or button names may vary slightly between AdsPower versions. Refer to the interface shown in your current client. Use proxies only for lawful and compliant business purposes, and comply with the target website's Terms of Service and all applicable local laws and regulations.

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
