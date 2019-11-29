<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 快速启动

## 获取jar包

> 两种办法

1. 下载编译好的文件

    ```text
    https://github.com/XiaoMi/thain/releases/download/v1.2.1/thain-server-1.2.1.jar
    ```

1. 代码自行编译

    - 运行环境需求
        - jdk >= 8
        - maven 3
        - nodejs >= 8
        - 操作系统：Linux 或 MacOS 测试通过，windows前端编译 *可能* 会有问题

    - 在项目根目录下依次执行

       ```shell
       git clone https://github.com/XiaoMi/thain.git
       cd thain
       cd thain-fe
       npm install
       npm run build
       cd ..
       mvn -U clean package
       cd thain-server/target
       ```

## 运行jar包

1. 环境要求

    1. jre >= 8

1. 在jar包所在路径执行

    ```shell
    java -jar thain-server-1.2.1.jar
    ```

1. 打开 [localhost:9900](http://localhost:9900) 就可以看到效果了

1. 初始账号密码：admin, admin
