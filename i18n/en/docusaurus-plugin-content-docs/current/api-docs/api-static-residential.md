---
sidebar_position: 3
slug: /api-static-residential
description: Static residential proxy V2 API — countries, cities, purchase, renew, segment batch buy, and debugging.
---

# Static Proxy
---

## 1. Overview

The Static IP V2 API provides full lifecycle management for static residential proxies: list resources, create proxies, renew, query inventory, and more.

---

## 2. List countries

**Method:** `GET /v2/static-residential/listCountry`

**Description:** Returns supported country codes.

#### Request parameters

None.

#### Response format

| Field | Type            | Description                          |
| ----- | --------------- | ------------------------------------ |
| data  | Array`<String>` | Country codes, e.g. `["US","UK","CA"]` |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": ["US", "UK", "CA", "AU", "DE", "FR"]
}
```

---

## 3. List cities

**Method:** `GET /v2/static-residential/listCity`

**Description:** Returns cities for a given country.

#### Request parameters

| Name         | Type   | Required | Description              |
| ------------ | ------ | -------- | ------------------------ |
| country_code | String | Yes      | Country code, e.g. US, UK |

#### Response format

| Field | Type            | Description                                |
| ----- | --------------- | ------------------------------------------ |
| data  | Array`<String>` | City names, e.g. `["New York","Los Angeles"]` |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": ["New York", "Los Angeles", "Chicago", "Houston"]
}
```

---

## 4. List business types

**Method:** `GET /v2/static-residential/listBusiness`

**Description:** Returns available business/use-case names.

#### Request parameters

None.

#### Response format

| Field               | Type            | Description                                      |
| ------------------- | --------------- | ------------------------------------------------ |
| data                | Array`<Object>` | Business objects                                 |
| data[].BusinessName | String          | e.g. general, social_media, e_commerce, YouTube  |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": [
    { "BusinessName": "YouTube" },
    { "BusinessName": "TikTok" },
    { "BusinessName": "other" }
  ]
}
```

---

## 5. Count available IPs

**Method:** `POST /v2/static-residential/countIdleIP`

**Description:** Returns available IP count for the given filters.

#### Request parameters

| Name         | Type    | Required | Description                              | Example   |
| ------------ | ------- | -------- | ---------------------------------------- | --------- |
| country_code | String  | Yes      | Country code                             | US        |
| city_name    | String  | No       | City; empty = random                     | New York  |
| business     | String  | Yes      | From `listBusiness`                      | general   |
| line_type    | Integer | Yes      | Quality: 1 basic, 2 standard, 3 premium  | 1         |

#### Request example

```json
{
  "country_code": "US",
  "city_name": "New York",
  "business": "YouTube",
  "line_type": 1
}
```

#### Response format

| Field | Type    | Description      |
| ----- | ------- | ---------------- |
| data  | Integer | Available count  |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": 1250
}
```

---

## 6. Create static proxy IPs

**Method:** `POST /v2/static-residential/newIP`

**Description:** Create a new static proxy order.

**Permission:** Customer access control required.

#### Request parameters

| Name         | Type    | Required | Description                         | Constraints                          | Example   |
| ------------ | ------- | -------- | ----------------------------------- | ------------------------------------ | --------- |
| country_code | String  | Yes      | Country code                        | —                                    | US        |
| city_name    | String  | No       | City; empty = random                | —                                    | New York  |
| days         | Integer | Yes      | Lease duration (days)               | 1, 7, 15, 30, 60, 90, 365            | 30        |
| count        | Integer | Yes      | Quantity                            | 1–500                                | 10        |
| line_type    | Integer | Yes      | Quality: 1 basic, 2 standard, 3 premium | 1–3                                | 1         |
| is_udp       | Integer | No       | UDP: 1 on, 0 off                     | 0–1, default 0                       | 0         |
| business     | String  | Yes      | From `listBusiness`                 | —                                    | general   |
| customer_id  | Integer | No       | Order on behalf of user; null = self  | —                                    | null      |

#### Request example

```json
{
  "country_code": "US",
  "city_name": "New York",
  "days": 30,
  "count": 10,
  "line_type": 1,
  "is_udp": 0,
  "business": "YouTube",
  "customer_id": null
}
```

#### Response format

| Field                 | Type            | Description           |
| --------------------- | --------------- | --------------------- |
| data                  | Object          | Order result          |
| data.order_id         | String          | Order ID              |
| data.total            | Integer         | IPs created           |
| data.amount           | Double          | Order amount          |
| data.currency         | String          | Currency              |
| data.created_at       | Date            | Created at            |
| data.expired_at       | Date            | Expires at            |
| data.allots           | Array`<Object>` | Allocated proxies     |
| data.allots[].ip      | String          | Exit IP               |
| data.allots[].node_domain | String      | Proxy host            |
| data.allots[].node_port   | Integer     | Proxy port            |
| data.allots[].account     | String      | Username              |
| data.allots[].password    | String      | Password              |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": {
    "order_id": "20240521174348201395",
    "total": 2,
    "amount": 15.5,
    "currency": "USD",
    "created_at": "2024-12-19T10:30:00Z",
    "expired_at": "2025-01-18T10:30:00Z",
    "allots": [
      {
        "ip": "192.168.1.100",
        "node_domain": "proxy1.example.com",
        "node_port": 8080,
        "account": "user123",
        "password": "pass456"
      },
      {
        "ip": "192.168.1.101",
        "node_domain": "proxy2.example.com",
        "node_port": 8080,
        "account": "user124",
        "password": "pass457"
      }
    ]
  }
}
```

---

## 7. Renew static proxy

**Method:** `POST /v2/static-residential/renewIP`

**Description:** Renew an existing static proxy IP.

**Permission:** Customer access control required.

#### Request parameters

| Name | Type    | Required | Description   | Constraints                | Example       |
| ---- | ------- | -------- | ------------- | -------------------------- | ------------- |
| ip   | String  | Yes      | IP to renew   | —                          | 192.168.1.100 |
| days | Integer | Yes      | Renewal days  | 1, 7, 15, 30, 60, 90, 365  | 30            |

#### Request example

```json
{
  "ip": "192.168.1.100",
  "days": 30
}
```

#### Response format

| Field                 | Type            | Description           |
| --------------------- | --------------- | --------------------- |
| data                  | Object          | Renewal result        |
| data.order_id         | String          | Renewal order ID      |
| data.total            | Integer         | IPs renewed           |
| data.amount           | Double          | Renewal amount        |
| data.currency         | String          | Currency              |
| data.created_at       | Date            | Renewed at            |
| data.expired_at       | Date            | New expiry time       |
| data.allots           | Array`<Object>` | Renewed proxies       |
| data.allots[].ip      | String          | Renewed IP            |
| data.allots[].node_domain | String      | Proxy host            |
| data.allots[].node_port   | Integer     | Proxy port            |
| data.allots[].account     | String      | Username              |
| data.allots[].password    | String      | Password              |

#### Response example

**Success:**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": {
    "order_id": "20240521174348201395",
    "total": 1,
    "amount": 7.75,
    "currency": "USD",
    "created_at": "2024-12-19T10:30:00Z",
    "expired_at": "2025-02-18T10:30:00Z",
    "allots": [
      {
        "ip": "192.168.1.100",
        "node_domain": "proxy1.example.com",
        "node_port": 8080,
        "account": "user123",
        "password": "pass456"
      }
    ]
  }
}
```

---

## 8. List purchasable IP segments

**Method:** `POST /availableIpSegments`

**Description:** Query remaining purchasable IP list by filters. Returns only each IP segment and its available quantity. User info is taken from authentication; no need to pass it in the request.

#### Request parameters

| Name         | Type    | Required | Description                    | Constraints     | Example  |
| ------------ | ------- | -------- | ------------------------------ | --------------- | -------- |
| country_code | String  | Yes      | Country/region code            | e.g. HK, US     | HK       |
| city_name    | String  | No       | City; empty = random           | —               | HongKong |
| line_type    | Integer | No       | Quality: 1 basic, 2 standard, 3 premium | 1–3, default 1 | 1        |

#### Request example

```json
{
  "country_code": "HK",
  "city_name": "HongKong",
  "line_type": 1
}
```

#### Response format

| Field                      | Type            | Description                    |
| -------------------------- | --------------- | ------------------------------ |
| data                       | Object          | Query result                   |
| data.total_quantity        | Integer         | Total available across segments |
| data.segments              | Array`<Object>` | Per-segment inventory          |
| data.segments[].ip_segment | String          | CIDR, e.g. `62.72.182.0/24`    |
| data.segments[].quantity   | Integer         | Available in segment           |

#### Response example

**Success:**

```json
{
  "code": "200",
  "message": "操作成功",
  "data": {
    "total_quantity": 506,
    "segments": [
      { "ip_segment": "62.72.182.0/24", "quantity": 253 },
      { "ip_segment": "178.94.169.0/24", "quantity": 253 }
    ]
  }
}
```

---

## 9. Batch purchase by IP segment

**Method:** `POST /batchPurchaseBySegment`

**Description:** Specify multiple IP segment prefixes (e.g. `66.92.226`, `66.93.86`) plus a total count; allocate in segment order until the count is met. Authenticated user only. Returns order ID, allocated count, and expiry time.

**Permission:** Customer access control required (agent users).

#### Request parameters

| Name                | Type            | Required | Description                                      | Constraints              | Example                |
| ------------------- | --------------- | -------- | -------------------------------------------------- | ------------------------ | ---------------------- |
| country_code        | String          | Yes      | Country/region                                     | e.g. HK, US              | HK                     |
| city_name           | String          | No       | City; empty = random                               | —                        | HongKong               |
| line_type           | Integer         | No       | Quality: 1 basic, 2 standard, 3 premium              | 1–3, default 1           | 2                      |
| business            | String          | No       | From `listBusiness`                                | default `other`          | other                  |
| ip_segment_prefixes | Array`<String>` | Yes      | Prefix list in allocation order. e.g. `["66.92.226","66.93.86"]` allocates from `66.92.226.x` first, then `66.93.86.x` if needed | — | `["66.92.226","66.93.86"]` |
| count               | Integer         | Yes      | Total IPs to allocate from selected segments       | 1–500                    | 20                     |
| days                | Integer         | Yes      | Lease days                                         | 1, 7, 15, 30, 60, 90, 365 | 30                  |
| is_udp              | Integer         | No       | UDP: 1 on, 0 off                                   | 0–1, default 0           | 0                      |

#### Request example

```json
{
  "country_code": "HK",
  "city_name": "HongKong",
  "line_type": 2,
  "business": "other",
  "ip_segment_prefixes": ["66.92.226", "66.93.86"],
  "count": 20,
  "days": 30,
  "is_udp": 0
}
```

#### Response format

| Field           | Type    | Description        |
| --------------- | ------- | ------------------ |
| data            | Object  | Order info         |
| data.order_id   | String  | Order ID           |
| data.total      | Integer | Allocated count    |
| data.expired_at | String  | ISO 8601 expiry    |

#### Response example

**Success:**

```json
{
  "code": "200",
  "message": "操作成功",
  "data": {
    "order_id": "SO202401010001",
    "total": 20,
    "expired_at": "2024-01-31T12:00:00.000+00:00"
  }
}
```

---

## 10. List allocated IPs by order ID

**Method:** `GET /orderAllots`

**Description:** Returns all allocated IPs for an order (no pagination). Authenticated user can only query their own orders. Does not return order ID; returns allocation list only.

**Permission:** Customer access control required.

#### Request parameters

| Name     | Type   | Required | Description | Constraints | Example        |
| -------- | ------ | -------- | ----------- | ----------- | -------------- |
| order_id | String | Yes      | Order ID    | Query param | SO202401010001 |

**Example:** `GET /orderAllots?order_id=SO202401010001`

#### Response format

`data` is an array of all allocated IPs for the order.

| Field              | Type    | Description      |
| ------------------ | ------- | ---------------- |
| data               | Array   | Allocation list (see fields below) |
| data[].ip          | String  | Exit IP          |
| data[].node_domain | String  | Proxy host       |
| data[].node_port   | Integer | Port             |
| data[].account     | String  | Username         |
| data[].password    | String  | Password         |
| data[].expired_at  | String  | ISO 8601 expiry  |

#### Response example

**Success:**

```json
{
  "code": "200",
  "message": "操作成功",
  "data": [
    {
      "ip": "178.93.111.1",
      "node_domain": "proxy.example.com",
      "node_port": 1080,
      "account": "user001",
      "password": "xxx",
      "expired_at": "2024-01-31T12:00:00.000+00:00"
    }
  ]
}
```

---

## 11. Debug / test

You can use the following examples to test the API:


### List countries

```bash
curl -X GET "http://user.ipweb.cc/prod-api/v2/static-residential/listCountry" \
     -H "Token: your_access_token_here"
```

### List cities

```bash
curl -X GET "http://user.ipweb.cc/prod-api/v2/static-residential/listCity?country_code=US" \
     -H "Token: your_access_token_here"
```

### List business types

```bash
curl -X GET "http://user.ipweb.cc/prod-api/v2/static-residential/listBusiness" \
     -H "Token: your_access_token_here"
```

### Count idle IPs

```bash
curl -X POST "http://user.ipweb.cc/prod-api/v2/static-residential/countIdleIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "US",
       "city_name": "New York",
       "business": "YouTube",
       "line_type": 1
     }'
```

### Create static proxies

```bash
curl -X POST "http://user.ipweb.cc/prod-api/v2/static-residential/newIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "US",
       "city_name": "New York",
       "days": 30,
       "count": 1,
       "line_type": 1,
       "is_udp": 0,
       "business": "YouTube",
       "customer_id": null
     }'
```

### Renew static proxy

```bash
curl -X POST "http://user.ipweb.cc/prod-api/v2/static-residential/renewIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "ip": "192.168.1.100",
       "days": 30
     }'
```

### List purchasable IP segments

```bash
curl -X POST "http://user.ipweb.cc/prod-api/v2/static-residential/availableIpSegments" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "HK",
       "city_name": "HongKong",
       "line_type": 1
     }'
```

### Batch purchase by segment

```bash
curl -X POST "http://user.ipweb.cc/prod-api/v2/static-residential/batchPurchaseBySegment" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "HK",
       "city_name": "HongKong",
       "line_type": 2,
       "business": "other",
       "ip_segment_prefixes": ["66.92.226", "66.93.86"],
       "count": 20,
       "days": 30,
       "is_udp": 0
     }'
```

### List allocated IPs by order ID

```bash
curl -X GET "http://user.ipweb.cc/prod-api/v2/static-residential/orderAllots?order_id=SO202401010001" \
     -H "Token: your_access_token_here"
```

**Note:** Replace `your_access_token_here` with your real token. We recommend using Postman or another API testing tool.

---

## 12. Error codes

The following error codes may be returned by static IP APIs:

### Static IP business errors

| Code | Description                                      | Resolution                                      |
| ---- | ------------------------------------------------ | ----------------------------------------------- |
| 2000 | Static IP not under this account                 | Verify IP ownership                             |
| 2001 | Insufficient static IP inventory                 | Try another region or retry later               |
| 2002 | Static IP already in use                         | Choose another IP                               |
| 2003 | Static IP configuration failed                   | Check parameters and retry                      |
| 2004 | Static IP renewal failed                         | Check balance and renewal parameters            |
| 2005 | Static IP expired                              | Purchase or renew                               |
| 2006 | Static IP does not exist                       | IP released or invalid                          |
| 2100 | Allowed days: 1, 7, 15, 30, 60, 90, 365        | Use an allowed `days` value                     |
| 2101 | This IP only supports renewal: 30, 60, 90, 365 | Use supported renewal period                    |

## 13. Error response examples

#### Insufficient inventory

```json
{
  "code": 2001,
  "msg": "静态IP库存不足",
  "data": null
}
```

#### IP not found

```json
{
  "code": 2006,
  "msg": "静态IP不存在",
  "data": null
}
```

#### Invalid days

```json
{
  "code": 2100,
  "msg": "可选天数: 1、7、15、30、60、90、365天",
  "data": null
}
```

#### Renewal days restriction

```json
{
  "code": 2101,
  "msg": "当前IP仅支持: 30、60、90、365天",
  "data": null
}
```

---

**© 2024 Static IP V2 API — v1.10.0**

**Last updated:** February 25, 2026
