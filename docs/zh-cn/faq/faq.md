<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# FAQ

- Q: kill 一个 flow，执行中的 job 怎么处理的？
- A: 目前的 kill 只是在数据库标记了一下，每个 job 执行之前会读一下是否被 kill，如果被 kill 了，未执行的 job 就不再执行了,正在执行的 job 还会继续执行。

---

- Q: 负载均衡是怎么实现的
- A: 数据库随机抢占，具体参考 Quartz
