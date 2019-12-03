<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# FAQ

- Q: kill 一个flow，执行中的job怎么处理的？
- A: 目前的kill 只是在数据库标记了一下，每个job执行之前会读一下是否被kill，如果被kill了，未执行的job就不再执行了,正在执行的job还会继续执行。

---
