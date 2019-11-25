<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 邮件发送组件

## 组件名称

std::mail

## 必填参数

title: 邮件标题

contentHtml: 邮件内容

recipient: 收件人（多个用逗号隔开）

## 其他

可以在邮件标题和内容中用${}引用别的job产生的结果, 如: `${a.name}`
