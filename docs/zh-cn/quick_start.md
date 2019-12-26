<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 快速启动

## 获取 jar 包

> 两种办法

1. 下载编译好的文件

   ```text
   https://github.com/XiaoMi/thain/releases/download/v1.3.0-beta.0/thain-server-1.3.0-beta.0.jar
   ```

1. 代码自行编译

   - 运行环境需求

     - jdk >= 8
     - nodejs >= 8
     - 操作系统：Linux 或 MacOS, 不支持windows

   - 在项目根目录下依次执行

     ```shell
     git clone https://github.com/XiaoMi/thain.git
     cd thain
     cd thain-fe
     npm install
     npm run build
     cd ..
     ./gradlew clean builde
     cd thain-server/build/libs
     ```

## 运行 jar 包

1. 环境要求

   1. jre >= 8

1. 在 jar 包所在路径执行

   ```shell
   java -jar thain-server-1.3.0-beta.0.jar
   ```

1. 打开 [localhost:9900](http://localhost:9900) 就可以看到效果了

1. 初始账号密码：admin, admin
