---
sidebar_position: 3
slug: /api-static-residential
description: 静态住宅代理 V2 API：国家与城市查询、创建静态代理与续费、调试测试及响应格式说明。
---

# 静态代理
---

## 1. 接口概述

静态 IP V2 API 提供了完整的静态住宅代理 IP 管理功能，包括查询可用资源、创建代理、续费等操作。

---

## 2. 获取国家列表

**请求方式：** `GET /v2/static-residential/listCountry`

**功能描述：** 获取支持的国家代码列表

#### 请求参数

无需请求参数

#### 响应数据格式

| 字段名 | 类型            | 说明                                 |
| ------ | --------------- | ------------------------------------ |
| data   | Array`<String>` | 国家代码数组，如：["US", "UK", "CA"] |

#### 响应示例

**成功响应：**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": ["US", "UK", "CA", "AU", "DE", "FR"]
}
```

---

## 3. 获取城市列表

**请求方式：** `GET /v2/static-residential/listCity`

**功能描述：** 根据国家代码获取支持的城市列表

#### 请求参数

| 参数名       | 类型   | 必填 | 说明                    |
| ------------ | ------ | ---- | ----------------------- |
| country_code | String | 是   | 国家代码，如：US、UK 等 |

#### 响应数据格式

| 字段名 | 类型            | 说明                                          |
| ------ | --------------- | --------------------------------------------- |
| data   | Array`<String>` | 城市名称数组，如：["New York", "Los Angeles"] |

#### 响应示例

**成功响应：**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": ["New York", "Los Angeles", "Chicago", "Houston"]
}
```

---

## 4. 获取业务名称集合

**请求方式：** `GET /v2/static-residential/listBusiness`

**功能描述：** 获取可用的业务名称列表

#### 请求参数

无需请求参数

#### 响应数据格式

| 字段名              | 类型            | 说明                                            |
| ------------------- | --------------- | ----------------------------------------------- |
| data                | Array`<Object>` | 业务名称对象数组                                |
| data[].BusinessName | String          | 业务名称，如：general、social_media、e_commerce |

#### 响应示例

**成功响应：**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": [
    {
      "BusinessName": "YouTube"
    },
    {
      "BusinessName": "TikTok"
    },
    {
      "BusinessName": "other"
    }
  ]
}
```

---

## 5. 获取空闲 IP 数

**请求方式：** `POST /v2/static-residential/countIdleIP`

**功能描述：** 查询指定条件下的可用 IP 数量

#### 请求参数

| 参数名       | 类型    | 必填 | 说明                                 | 示例值   |
| ------------ | ------- | ---- | ------------------------------------ | -------- |
| country_code | String  | 是   | 国家编码                             | US       |
| city_name    | String  | 否   | 城市名称，空表示随机                 | New York |
| business     | String  | 是   | 业务名称，通过 listBusiness 接口获取 | general  |
| line_type    | Integer | 是   | IP 质量：1-基础，2-标准，3-高端      | 1        |
| sell_mode    | Integer | 否   | 售卖模式：1-独享，2-共享；未传用平台默认 | 2        |

#### 请求示例

```json
{
  "country_code": "US",
  "city_name": "New York",
  "business": "YouTube",
  "line_type": 1,
  "sell_mode": 2
}
```

#### 响应数据格式

| 字段名 | 类型    | 说明         |
| ------ | ------- | ------------ |
| data   | Integer | 可用 IP 数量 |

#### 响应示例

**成功响应：**

```json
{
  "code": 200,
  "msg": "操作成功",
  "data": 1250
}
```

---

## 6 创建静态代理 IP

**请求方式：** `POST /v2/static-residential/newIP`

**功能描述：** 创建新的静态代理 IP 订单

**权限要求：** 需要客户访问控制权限

#### 请求参数

| 参数名       | 类型    | 必填 | 说明                                 | 限制                              | 示例值   |
| ------------ | ------- | ---- | ------------------------------------ | --------------------------------- | -------- |
| country_code | String  | 是   | 国家编码                             | -                                 | US       |
| city_name    | String  | 否   | 城市名称，空表示随机                 | -                                 | New York |
| days         | Integer | 是   | 购买的代理天数                       | 可选值：1、7、15、30、60、90、365 | 30       |
| count        | Integer | 是   | 购买的代理数量                       | 1-500                             | 10       |
| line_type    | Integer | 是   | IP 质量：1-基础，2-标准，3-高端      | 1-3                               | 1        |
| is_udp       | Integer | 否   | UDP 启用：1 启用，0 不启用           | 0-1，默认 0                       | 0        |
| sell_mode    | Integer | 否   | 售卖模式：1-独享，2-共享；未传用平台默认 | 1-2                           | 2        |
| business     | String  | 是   | 业务类型，通过 listBusiness 接口获取 | -                                 | general  |
| customer_id  | String  | 否   | 指定下单用户 ID（雪花 ID，建议 JSON 字符串）；null 表示自己 | -              | null     |

#### 请求示例

```json
{
  "country_code": "US",
  "city_name": "New York",
  "days": 30,
  "count": 10,
  "line_type": 1,
  "is_udp": 0,
  "sell_mode": 1,
  "business": "YouTube",
  "customer_id": null
}
```

#### 响应数据格式

| 字段名                    | 类型            | 说明               |
| ------------------------- | --------------- | ------------------ |
| data                      | Object          | 创建结果对象       |
| data.order_id             | String          | 订单号             |
| data.total                | Integer         | 创建的 IP 数量     |
| data.amount               | Double          | 订单金额           |
| data.currency             | String          | 计费货币           |
| data.created_at           | String          | 创建时间（yyyy-MM-dd HH:mm:ss） |
| data.expired_at           | String          | 到期时间（yyyy-MM-dd HH:mm:ss） |
| data.allots               | Array`<Object>` | 分配的代理信息数组 |
| data.allots[].ip          | String          | 出口 IP 地址       |
| data.allots[].node_domain | String          | 代理服务器域名     |
| data.allots[].node_port   | Integer         | 代理端口           |
| data.allots[].account     | String          | 代理账号           |
| data.allots[].password    | String          | 代理密码           |

#### 响应示例

**成功响应：**

```json
{
  "code": "200",
  "message": "操作成功",
  "data": {
    "order_id": "20240521174348201395",
    "total": 2,
    "amount": 15.5,
    "currency": "USD",
    "created_at": "2024-12-19 10:30:00",
    "expired_at": "2025-01-18 10:30:00",
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

**失败响应（未交付 IP，`allots` 为空）：**

订单流程结束但未分配任何 IP 时，接口返回失败（非 `200`），不会返回空 `allots` 的成功响应。

```json
{
  "code": "2007",
  "message": "购买失败",
  "data": null
}
```

---

## 7. 静态代理续费

**请求方式：** `POST /v2/static-residential/renewIP`

**功能描述：** 为现有静态代理 IP 续费

**权限要求：** 需要客户访问控制权限

#### 请求参数

| 参数名 | 类型    | 必填 | 说明             | 限制                              | 示例值        |
| ------ | ------- | ---- | ---------------- | --------------------------------- | ------------- |
| ip     | String  | 是   | 要续费的 IP 地址 | -                                 | 192.168.1.100 |
| days   | Integer | 是   | 续费天数         | 可选值：1、7、15、30、60、90、365 | 30            |

#### 请求示例

```json
{
  "ip": "192.168.1.100",
  "days": 30
}
```

#### 响应数据格式

| 字段名                    | 类型            | 说明               |
| ------------------------- | --------------- | ------------------ |
| data                      | Object          | 续费结果对象       |
| data.order_id             | String          | 续费订单号         |
| data.total                | Integer         | 续费的 IP 数量     |
| data.amount               | Double          | 续费金额           |
| data.currency             | String          | 计费货币           |
| data.created_at           | String          | 创建时间（yyyy-MM-dd HH:mm:ss） |
| data.expired_at           | String          | 新的到期时间（yyyy-MM-dd HH:mm:ss） |
| data.allots               | Array`<Object>` | 续费的代理信息数组 |
| data.allots[].ip          | String          | 续费的 IP 地址     |
| data.allots[].node_domain | String          | 代理服务器域名     |
| data.allots[].node_port   | Integer         | 代理端口           |
| data.allots[].account     | String          | 代理账号           |
| data.allots[].password    | String          | 代理密码           |

#### 响应示例

**成功响应：**

```json
{
  "code": "200",
  "message": "操作成功",
  "data": {
    "order_id": "20240521174348201395",
    "total": 1,
    "amount": 7.75,
    "currency": "USD",
    "created_at": "2024-12-19 10:30:00",
    "expired_at": "2025-02-18 10:30:00",
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

## 8. 查询剩余可买 IP 列表

**请求方式：** `POST /availableIpSegments`

**功能描述：** 根据筛选条件查询剩余可买 IP 列表，仅返回各 IP 段及对应剩余可买数量。用户信息从鉴权获取，无需传入。

#### 请求参数

| 参数名       | 类型    | 必填 | 说明                        | 限制     | 示例值   |
| ------------ | ------- | ---- | --------------------------- | -------- | -------- |
| country_code | String  | 是   | 国家/地区编码               | 如 HK、US | HK       |
| city_name    | String  | 否   | 城市名称，空表示随机        | -        | HongKong |
| line_type    | Integer | 否   | IP 质量：1-基础，2-标准，3-高端 | 1-3，默认 1 | 1        |
| sell_mode    | Integer | 否   | 售卖模式：1-独享，2-共享；未传用平台默认 | 1-2   | 2        |
| business     | String  | 否   | 业务类型，通过 listBusiness 获取 | -     | other    |

#### 请求示例

```json
{
  "country_code": "HK",
  "city_name": "HongKong",
  "line_type": 1,
  "sell_mode": 2,
  "business": "other"
}
```

#### 响应数据格式

| 字段名                     | 类型            | 说明                           |
| -------------------------- | --------------- | ------------------------------ |
| data                       | Object          | 查询结果对象                   |
| data.total_quantity        | Integer         | 剩余可买 IP 总数（所有段汇总） |
| data.segments              | Array`<Object>` | 各 IP 段及对应剩余可买数量     |
| data.segments[].ip_segment | String          | IP 段，CIDR 格式，如 62.72.182.0/24 |
| data.segments[].quantity   | Integer         | 该段剩余可买数量               |

#### 响应示例

**成功响应：**

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

## 9. 按 IP 段批量购买系统静态 IP

**请求方式：** `POST /batchPurchaseBySegment`

**功能描述：** 指定多个 IP 段前缀（如 66.92.226 开头、66.93.86 开头）+ 一个总数量，按 IP 段顺序依次分配直至达到数量。仅限当前鉴权用户，返回订单号、分配数量、过期时间。

**权限要求：** 需要客户访问控制权限（代理商用户）

#### 请求参数

| 参数名                | 类型            | 必填 | 说明                                                                 | 限制              | 示例值                 |
| --------------------- | --------------- | ---- | -------------------------------------------------------------------- | ----------------- | ---------------------- |
| country_code          | String          | 是   | 国家/地区编码                                                        | 如 HK、US         | HK                     |
| city_name             | String          | 否   | 城市名称，空表示随机                                                 | -                 | HongKong               |
| line_type             | Integer         | 否   | IP 质量：1-基础，2-标准，3-高端                                       | 1-3，默认 1       | 2                      |
| business              | String          | 否   | 业务类型，通过 listBusiness 获取                                     | 默认 other        | other                  |
| ip_segment_prefixes   | Array`<String>` | 是   | IP 段前缀列表，按此顺序依次分配。如 ["66.92.226","66.93.86"] 表示先从 66.92.226.x 分配，不够再从 66.93.86.x | -                 | ["66.92.226","66.93.86"] |
| count                 | Integer         | 是   | 购买总数量（从选定 IP 段中按顺序分配直至达到此数量）                  | 1-500             | 20                     |
| days                  | Integer         | 是   | 购买天数                                                             | 1、7、15、30、60、90、365 | 30                     |
| is_udp                 | Integer         | 否   | UDP 启用：1 启用，0 不启用                                           | 0-1，默认 0       | 0                      |
| sell_mode              | Integer         | 否   | 售卖模式：1-独享，2-共享；未传用平台默认                             | 1-2               | 2                      |

#### 请求示例

```json
{
  "country_code": "HK",
  "city_name": "HongKong",
  "line_type": 2,
  "business": "other",
  "ip_segment_prefixes": ["66.92.226", "66.93.86"],
  "count": 20,
  "days": 30,
  "is_udp": 0,
  "sell_mode": 2
}
```

#### 响应数据格式

| 字段名           | 类型   | 说明                     |
| ---------------- | ------ | ------------------------ |
| data             | Object | 订单相关信息             |
| data.order_id    | String | 订单号                   |
| data.total       | Integer | 分配数量                 |
| data.expired_at  | String | 过期时间（ISO 8601）     |

#### 响应示例

**成功响应：**

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

## 10. 根据订单 ID 查询分配 IP 列表

**请求方式：** `GET /orderAllots`

**功能描述：** 根据订单 ID 查询该订单下所有已分配 IP 列表，不分页。仅限当前鉴权用户查询本人订单。不返回订单 ID，仅返回分配 IP 列表。

**权限要求：** 需要客户访问控制权限

#### 请求参数

| 参数名    | 类型   | 必填 | 说明     | 限制       | 示例值         |
| --------- | ------ | ---- | -------- | ---------- | -------------- |
| order_id  | String | 是   | 订单号   | Query 参数 | SO202401010001 |

**请求示例：** `GET /orderAllots?order_id=SO202401010001`

#### 响应数据格式

响应 `data` 为数组，即该订单下所有分配 IP 列表。

| 字段名              | 类型    | 说明                   |
| ------------------- | ------- | ---------------------- |
| data                | Array   | 分配 IP 列表（每项见下表） |
| data[].ip           | String  | 出口 IP                |
| data[].node_domain  | String  | 代理服务器域名         |
| data[].node_port    | Integer | 代理端口               |
| data[].account      | String  | 代理账号               |
| data[].password     | String  | 代理密码               |
| data[].expired_at   | String  | 过期时间（ISO 8601）   |

#### 响应示例

**成功响应：**

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

## 11. 调试测试

您可以使用以下工具测试 API 接口：


### 获取国家列表

```bash
curl -X GET "http://api.ipweb.cc/prod-api/v2/static-residential/listCountry" \
     -H "Token: your_access_token_here"
```

### 获取城市列表

```bash
curl -X GET "http://api.ipweb.cc/prod-api/v2/static-residential/listCity?country_code=US" \
     -H "Token: your_access_token_here"
```

### 获取业务名称集合

```bash
curl -X GET "http://api.ipweb.cc/prod-api/v2/static-residential/listBusiness" \
     -H "Token: your_access_token_here"
```

### 获取空闲 IP 数

```bash
curl -X POST "http://api.ipweb.cc/prod-api/v2/static-residential/countIdleIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "US",
       "city_name": "New York",
       "business": "YouTube",
       "line_type": 1,
       "sell_mode": 2
     }'
```

### 创建静态代理 IP

```bash
curl -X POST "http://api.ipweb.cc/prod-api/v2/static-residential/newIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "US",
       "city_name": "New York",
       "days": 30,
       "count": 1,
       "line_type": 1,
       "is_udp": 0,
       "sell_mode": 1,
       "business": "YouTube",
       "customer_id": null
     }'
```

### 静态代理续费

```bash
curl -X POST "http://api.ipweb.cc/prod-api/v2/static-residential/renewIP" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "ip": "192.168.1.100",
       "days": 30
     }'
```

### 查询剩余可买 IP 列表

```bash
curl -X POST "http://api.ipweb.cc/prod-api/v2/static-residential/availableIpSegments" \
     -H "Token: your_access_token_here" \
     -H "Content-Type: application/json" \
     -d '{
       "country_code": "HK",
       "city_name": "HongKong",
       "line_type": 1,
       "sell_mode": 2,
       "business": "other"
     }'
```

### 按 IP 段批量购买

```bash
curl -X POST "http://api.ipweb.cc/prod-api/v2/static-residential/batchPurchaseBySegment" \
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
       "is_udp": 0,
       "sell_mode": 2
     }'
```

### 根据订单 ID 查询分配 IP 列表

```bash
curl -X GET "http://api.ipweb.cc/prod-api/v2/static-residential/orderAllots?order_id=SO202401010001" \
     -H "Token: your_access_token_here"
```

**注意：** 请将 `your_access_token_here` 替换为您的实际 Token。建议使用 Postman 或其他专业的 API 测试工具进行测试。

---

## 12. 错误码说明

以下是静态 IP 相关 API 接口可能返回的错误码及其说明：

### 静态 IP 业务相关错误码

| 错误码 | 说明                                   | 解决方案                                            |
| ------ | -------------------------------------- | --------------------------------------------------- |
| 2001   | 参数无效（含 line_type、sell_mode 等） | 检查请求参数是否符合限制                            |
| 2004   | 静态 IP 续费失败                       | 检查账户余额和续费参数                              |
| 2006   | 静态 IP / 订单不存在                   | 指定的 IP 或订单不存在                              |
| 2007   | 购买失败（未交付 IP）                  | newIP 返回空 allots；检查库存或联系客服             |
| 2008   | 无权限访问此接口                       | 确认账号已开通 API 白名单                           |
| 2009   | 非代理商用户访问                       | 段购等接口需代理商身份                              |
| 2010   | 非法的 customerId                      | 代客下单时 customer_id 须为下级用户                 |
| 2099   | 业务操作失败                           | 如余额不足等，见 message 详情                       |
| 2100   | days 参数无效                          | 天数须为：1、7、15、30、60、90、365 之一            |
| 2101   | 当前 IP 续费天数受限                   | 当前 IP 的续费天数仅支持：30、60、90、365 天        |

## 13. 错误响应示例

#### sell_mode 参数错误示例

```json
{
  "code": "2001",
  "message": "sell_mode参数无效",
  "data": null
}
```

#### newIP 购买失败（未交付 IP）示例

```json
{
  "code": "2007",
  "message": "购买失败",
  "data": null
}
```

#### 静态 IP 库存不足示例

```json
{
  "code": "2001",
  "message": "所选IP段库存不足",
  "data": null
}
```

#### 无权限访问示例

```json
{
  "code": "2008",
  "message": "无权限访问此接口",
  "data": null
}
```

#### 静态 IP 不存在示例

```json
{
  "code": "2006",
  "message": "IP不存在或不属于当前用户",
  "data": null
}
```

#### 天数参数错误示例

```json
{
  "code": "2100",
  "message": "days参数无效",
  "data": null
}
```

#### 续费天数限制示例

```json
{
  "code": 2101,
  "msg": "当前IP仅支持: 30、60、90、365天",
  "data": null
}
```

---

**© 2024 静态 IP V2 API 接口文档 - 版本 1.12.0**

**最后更新时间：** 2026 年 8 月 31 日
