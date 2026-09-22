---
sidebar_position: 15
sidebar_label: Linken Sphere Configuration Guide
description: Complete guide to configuring IPWeb static native proxies in Linken Sphere.
---
# Linken Sphere + IPWeb Static Native Proxy Setup Guide

*Before using IPWeb proxy services, make sure your local network can reliably access international websites and services. If you encounter connection issues, check your local network connection or contact customer support for assistance.*

IPWeb provides **70M+ clean residential IPs** across **220+ countries and regions**, with support for HTTP, HTTPS, and SOCKS5 protocols. It can support a wide range of use cases, including data collection, account management, and ad verification.

Among them, **Static Native Proxies** provide stable, fixed outbound IP addresses, making them better suited for use cases that require consistent network environments and reliable connections. This guide covers the complete process, from registration, free trial, and purchasing a Static Native Proxy to configuring and verifying an IPWeb proxy in the **Linken Sphere fingerprint browser**.

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

In the proxy list, pay particular attention to the following details, which will be used later when configuring Linken Sphere:

- **IP**: The purchased Static Native Proxy address;
- **Port**: The port used to connect to the proxy;
- **Username / Password**: The authentication credentials used to connect to the proxy;
- **Status**: Make sure the current proxy resource is available.

The page also displays information such as country/region, bandwidth, Shared/Dedicated status, connections (QPS), expiration/renewal, and UDP. These details can be used to verify the current proxy resource. When configuring Linken Sphere later, you will mainly use the **proxy IP, port, username, and password** shown here.

For information about proxy filtering, account export, renewals, and other management operations, see the [IPWeb Static Native Proxy User Guide](https://docs.ipweb.cc/static-native-user-guide/).

## Configure IPWeb Proxy in Linken Sphere

After completing the steps above and obtaining the IPWeb **proxy IP address, port, username, and password**, you can configure the proxy in **Linken Sphere**.

### 1. Create a Browser Session

Open Linken Sphere and click **NEW SESSION** in the upper-left corner of the main interface to create a new browser session.

Once created, the new session will appear in the session list on the current Desktop.

![Create a browser session in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-1.png)

### 2. Configure the IPWeb Proxy

In the session list, find the session you just created and click the **⋮** menu on the far right.

![Open the session menu in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-2.png)

From the menu, select **Set proxy**.

On the **Set proxy to** page, you can add or select a proxy for the current session.

![Open the proxy settings in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-3.png)

If no proxy has been added yet, click **NEW PROXY** and enter the proxy details obtained from IPWeb, including:

- **Proxy protocol**: Select the protocol that matches the one used by the IPWeb proxy, such as `SOCKS5` or `HTTP/HTTPS`.

- **ip**: Enter the proxy server address provided by IPWeb.

- **port**: Enter the corresponding proxy port.

- **login**: Enter the proxy username.

- **Pass**: Enter the proxy password.

![Enter IPWeb proxy details in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-4.png)

After entering the information, save the proxy. Once saved, the proxy will appear in the list, along with detected information such as country/region, city, and time zone.

![View the added proxy in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-5.png)

If you need to add multiple IPWeb proxies at once, you can also use **IMPORT FROM LIST** in the upper-right corner to import a proxy list in bulk.

### 3. Check the Proxy

In the proxy list, select the IPWeb proxy you just added, then click **CHECK PROXY** at the bottom.

When the page displays **Connection successfully validated**, the current proxy is able to connect successfully.

![Check the IPWeb proxy connection in Linken Sphere](https://oss.ipweb.cc/docs/imgs/2026/09/linkensphere-6.png)

After the check passes, keep the proxy selected and click **SET** at the bottom to bind it to the current browser session.

Return to the session list and check the **Proxy** column to confirm which proxy is assigned to the current session.

After confirming that the proxy has been bound successfully, click the launch button on the left side of the session to start the browser.

Once the browser starts, the session will connect to the internet through the configured IPWeb proxy. To change the proxy later, open the **⋮** menu on the right side of the session again, select **Set proxy**, then choose or add another proxy.

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
