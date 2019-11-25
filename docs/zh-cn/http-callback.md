<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# HTTP 回调

HTTP 回调功能一般用于其他系统接入调度时使用。

## flow修改回调

创建flow的时候可以填写`modify_callback_url`用于当flow修改时，回调指定的url

触发条件|method|content-type|回调内容
-|-|-|-
暂停|POST|FORM|{"status":1}
继续|POST|FORM|{"status":2}

## flow execution执行状态发生变化回调

创建flow的时候可以填写`callback_url`用于当flow execution状态发生变化时，回调指定的url

触发条件|method|content-type|回调内容
-|-|-|-
success|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 2}
error|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 3, message": [失败原因]}
running|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 4}
killed|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 5}
auto_killed|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 7}

## job execution执行状态发生变化回调

创建job的时候可以填写`callback_url`用于当job execution状态发生变化时，回调指定的url

触发条件|method|content-type|回调内容
-|-|-|-
running |POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 2}
success |POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 3}
error|POST|FORM| {"flowId": x, "flowExecutionId": x, "code": 4, message": [失败原因]}
