<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 组件说明

组件，封装了一系列的动作和属性，组件的每次执行会产生一个 job

## 组件结果的传递

在一个 flow 中，每个 job 所用的组件均可以产生临时结果，在接下来的 job 中使用它。

具体的产生和消费方法见“自定义组件”。

## std 组件

目前 std 组件只提供了 mail、shell、http 的最简单实现版本。

主要是为了供大家参考学习，如果有复杂的需求请自行创建组件实现。
