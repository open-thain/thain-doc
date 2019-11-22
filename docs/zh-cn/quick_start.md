<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 快速启动

1. 下载完整代码

   ```shell
   git clone https://github.com/XiaoMi/thain.git
   ```

1. 运行环境需要 jdk 8 以上， maven3, node 8 以上

1. 在项目根目录下依次执行

   ```shell
     cd thain-fe
     npm install
     npm run build
     cd ..
     mvn -U clean package
   ```

1. 打包完成后，即可运行

   ```shell
   java -jar thain-server/target/thain-server-1.1.5.jar
   ```

1. 打开 localhost:9900 就可以看到效果了

1. 初始账号密码：admin, admin
