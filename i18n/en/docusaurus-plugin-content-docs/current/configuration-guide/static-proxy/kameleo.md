---
sidebar_position: 13
sidebar_label: Kameleo Configuration Guide
description: Complete guide to configuring IPWeb static native proxies in Kameleo.
---
# Kameleo + IPWeb Static Native Proxy Setup Guide

*Before using IPWeb proxy services, make sure your local network can reliably access international websites and services. If you encounter connection issues, check your local network connection or contact customer support for assistance.*

IPWeb provides **70M+ clean residential IPs** across **220+ countries and regions**, with support for HTTP, HTTPS, and SOCKS5 protocols. It can support a wide range of use cases, including data collection, account management, and ad verification.

Among them, **Static Native Proxies** provide stable, fixed outbound IP addresses, making them better suited for use cases that require consistent network environments and reliable connections. This guide covers the complete process, from registration, free trial, and purchasing a Static Native Proxy to configuring and verifying an IPWeb proxy in the **Kameleo fingerprint browser**.

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

In the proxy list, pay particular attention to the following details, which will be used later when configuring Kameleo:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used to connect to the proxy;
- **Username / Password**: The authentication credentials used to connect to the proxy;
- **Status**: Make sure the current proxy resource is available.

The page also displays information such as country/region, bandwidth, Shared/Dedicated status, connections (QPS), expiration/renewal, and UDP. These details can be used to verify the current proxy resource. When configuring Kameleo later, you will mainly use the **proxy IP, port, username, and password** shown here.

For information about proxy filtering, account export, renewals, and other management operations, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

## Configure IPWeb Proxy in Kameleo

After completing the steps above and obtaining the IPWeb **proxy host, proxy port, proxy username, and proxy password**, you can configure the proxy in **Kameleo**.

### 1. Create a New Browser Profile

Open the Kameleo client. On the **Profiles** page, click **New** at the top to create a new browser profile.

![Create a new browser profile in Kameleo](https://oss.ipweb.cc/docs/imgs/2026/09/kameleo-1.png)

On the profile configuration page, you can first set basic information such as the profile name, device type, operating system, and browser based on your needs.

### 2. Enable the Proxy and Enter the IPWeb Proxy Details

In the **Proxy** section, select **With Proxy**, then enter the proxy information provided by IPWeb.

![Enable the proxy in Kameleo](https://oss.ipweb.cc/docs/imgs/2026/09/kameleo-2.png)

- **Proxy protocol**: Select the protocol that matches the proxy provided by IPWeb, such as `HTTP` or `SOCKS5`. The example shown uses `HTTP`.

- **IP or Hostname**: Enter the proxy host address provided by IPWeb.

- **Port**: Enter the corresponding proxy port.

- **Username**: Enter the proxy username provided by IPWeb.

- **Password**: Enter the corresponding proxy password.

![Enter IPWeb proxy details in Kameleo](https://oss.ipweb.cc/docs/imgs/2026/09/kameleo-3.png)

The proxy protocol selected in Kameleo must match the protocol actually provided by IPWeb. If the wrong protocol is selected, the proxy connection may fail even when the proxy host, port, username, and password are correct.

### 3. Test the Proxy Connection

After entering the proxy information, click **Test Proxy**.

Kameleo will test the proxy server connection, including IPv4/IPv6 connectivity, HTTPS connectivity, and the proxy IP geolocation.

If the relevant checks pass and the proxy server location is detected correctly, the IPWeb proxy is ready to use.

If the proxy test fails, check the following:

- Make sure the proxy host and port are entered correctly;

- Make sure the proxy username and password are correct;

- Make sure the proxy protocol selected in Kameleo matches the protocol provided by IPWeb;

- Make sure the current proxy is still active;

- Check whether your local network can connect to the proxy server normally.

![Test the proxy connection in Kameleo](https://oss.ipweb.cc/docs/imgs/2026/09/kameleo-4.png)

If you are using an IPv4-only proxy, a failed IPv6 check does not necessarily mean the proxy is unavailable. Focus on whether the IPv4, HTTPS, and proxy location checks pass successfully.

After the proxy test passes, continue with the remaining browser fingerprint and other profile settings as needed.

After confirming the settings, click **Save** to save the profile, or click **Save & Start** to save the profile and launch the browser immediately.

Once the browser launches, network requests from that profile will access target websites through the configured IPWeb proxy.

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
