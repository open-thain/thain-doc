<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 自定义数据库配置

1. Thain 支持的数据库版本

   - H2
   - MySql 5.7
   - 其他数据库以及版本没有测试过，如果你在使用可以反馈给我们

1. 如果不修改代码的话，项目中内置了 H2 数据库，可以直接运行

1. 自定义数据库需要修改以下配置

   修改 thain-server/src/main/resources/application.properties

   下面三项为数据库设置

   ```properties
   spring.datasource.url=
   spring.datasource.username=
   spring.datasource.password=
   ```

   数据库初始化 (1 建表并初始化数据， 2 初始化数据， 其他 不做初始化）

   ```properties
   datasource.initialization.level=1
   ```

1. 建表 sql `/thain-core/src/main/resources/sql`
