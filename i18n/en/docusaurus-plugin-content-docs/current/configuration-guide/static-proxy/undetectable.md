---
sidebar_position: 20
sidebar_label: Undetectable Configuration Guide
description: Complete guide to configuring IPWeb static native proxies in Undetectable.
---
# Undetectable + IPWeb Static Native Proxy Setup Guide

*Before using IPWeb proxy services, make sure your local network can reliably access international websites and services. If you encounter connection issues, check your local network connection or contact customer support for assistance.*

IPWeb provides **70M+ clean residential IPs** across **220+ countries and regions**, with support for HTTP, HTTPS, and SOCKS5 protocols. It can support a wide range of use cases, including data collection, account management, and ad verification.

Among them, **Static Native Proxies** provide stable, fixed outbound IP addresses, making them better suited for use cases that require consistent network environments and reliable connections. This guide covers the complete process, from registration, free trial, and purchasing a Static Native Proxy to configuring and verifying an IPWeb proxy in the **Undetectable fingerprint browser**.

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

In the proxy list, pay particular attention to the following details, which will be used later when configuring Undetectable:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used to connect to the proxy;
- **Username / Password**: The authentication credentials used to connect to the proxy;
- **Status**: Make sure the current proxy resource is available.

The page also displays information such as country/region, bandwidth, Shared/Dedicated status, connections (QPS), expiration/renewal, and UDP. These details can be used to verify the current proxy resource. When configuring Undetectable later, you will mainly use the **proxy IP, port, username, and password** shown here.

For information about proxy filtering, account export, renewals, and other management operations, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

## Configure IPWeb Proxy in Undetectable

After completing the steps above and obtaining the IPWeb server address, port, username, and password, you can add the proxy to an Undetectable browser profile.

### 1. Create a New Browser Profile

Open **Undetectable**, go to **Profiles** from the left-hand menu, then click **+ New Profile**.

![Create a new browser profile in Undetectable](https://oss.ipweb.cc/docs/imgs/2026/09/undetectable-1-en.png)

### 2. Add the IPWeb Proxy

On the new profile page, first enter a profile name. Then click the proxy settings icon in the center to open the proxy configuration area.

Under **Proxy**, select **New Proxy**, then enter the proxy information obtained from the IPWeb dashboard in the previous section.

First, select the proxy protocol on the left, such as `HTTP`. The protocol must match the one used by the IPWeb proxy.

Undetectable supports proxy information in the following format:

```text
Host:Port:Login:Password
```

![Enter IPWeb proxy details in Undetectable](https://oss.ipweb.cc/docs/imgs/2026/09/undetectable-2-en.png)

If the current proxy provides an IP rotation URL, you can enter it in the **IP Change Link (optional)** field below. Otherwise, leave this field blank.

The proxy name is also optional. You can enter one if you want to make different proxies easier to identify later.

> **Note:** The proxy protocol selected in Undetectable must match the protocol actually used by the current IPWeb proxy.

### 3. Check the Proxy Connection

After entering the proxy information, click the **double-arrow button** to the right of the proxy input field to test the proxy connection.

If the check succeeds, the page will display information about the current proxy, such as:

- Proxy exit IP
- Country/region
- City

![Check the IPWeb proxy connection in Undetectable](https://oss.ipweb.cc/docs/imgs/2026/09/undetectable-3-en.png)

The proxy information shown in **Profile info** on the right will also update accordingly.

If the detected location matches the IPWeb proxy you are using and no connection error appears, the proxy is ready to use.

### 4. Save and Launch the Browser Profile

After the proxy check passes, continue configuring other settings such as Cookies and browser fingerprint options as needed.

Once the configuration is complete, click **Create** at the bottom of the page to save the current browser profile.

If you want to launch the browser immediately after configuring the profile, you can click **Open** instead. Once launched, the profile will connect to the internet through the configured IPWeb proxy.

To further confirm that the proxy is working, you can also open `https://ipinfo.io` or another IP-checking website in the current Undetectable browser profile and verify that the displayed exit IP matches the IPWeb proxy.

### 5. Troubleshooting

| Issue | What to Check |
| --- | --- |
| Proxy check fails | Check that the proxy protocol is correct and that `Host:Port:Login:Password` is entered completely. |
| Authentication failed | Recheck the proxy username and password provided by IPWeb, and make sure no extra spaces were included when copying them. |
| Proxy check keeps failing | Check whether your local network can connect to the proxy server normally. |
| The browser shows the local IP after launch | Return to the browser profile and confirm that the IPWeb proxy has been saved and passed the connection check. |
| Detected location does not match the expected region | Check whether the IPWeb proxy you entered belongs to the target country/region or city node you purchased. |

> The interface layout or button names may vary slightly between Undetectable versions. Refer to the interface shown in your current client. Use proxies only for lawful and compliant business purposes, and comply with the target website's Terms of Service and all applicable local laws and regulations.

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
