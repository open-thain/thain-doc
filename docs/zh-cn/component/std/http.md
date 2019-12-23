<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# HTTP请求组件

## 组件名称

std::http

## 必填参数

url: url

method: GET 或  POST

## 选填参数

contentType: Content-Type

referenceData: 流程数据引用, 多个用逗号分开, 如: ```aName:a.name,bAge:b.age```, 冒号前面的是http发过去的key, 后面是value

forwardData: 转发数据, 这个会原封不动的发给url, key是`forwardData`

resultRegular: 结果正则表达式验证, 如果http返回的result不满足这个正则表达式，则视为失败，不填写则不验证

## 产生结果

result : http请求的返回结果
