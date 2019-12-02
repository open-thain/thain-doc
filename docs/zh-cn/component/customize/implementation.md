<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 组件实现

现阶段组件实现只支持java。

## 实现位置

建议把实现统一放在路径下：

thain/thain-component/com.xiaomi.thain.component

## 引入定义

上一节讲了如果写一个定义，我们实现的时候，需要把之前的定义引入。

在类上使用com.xiaomi.thain.component.annotation.ThainComponent这个注解。

如：

```java
@ThainComponent(group = "std", name = "mail",
        defineJson = "这里填上一节写好的mail定义")
```

## 定义属性

把json定义中的property放在class中，都用String类型接收。

如：

```java
/**
 * 邮件标题
 */
private String title;

/**
 * 邮件内容，html格式
 */
private String contentHtml;

/**
 * 邮件接收人，多个用逗号隔开
 */
private String recipient;
```

## 辅助工具

```java
com.xiaomi.thain.component.tools.ComponentTools
```

实现一个组件，大部分情况需要用到这个工具。

可以在组件的属性中增加一行：

```java
private ComponentTools tools;
```

即可使用这个工具。

ComponentTools 提供了一系列方法：

```java
public interface ComponentTools {

    /**
     * 发送邮件
     * @param to 收件人
     * @param subject 主题
     * @param content 正文
     */
    void sendMail(String[] to, String subject, String content) throws IOException, MessagingException;

    /**
     * 保存当前节点产生的数据
     *
     * @param key 数据的key
     * @param value 数据的value
     */
    void putStorage(@NonNull final String key, @NonNull final Object value);

    /**
     * 获取流程已经产生的数据
     *
     * @param jobName 节点名称
     * @param key key
     * @param <T> 自动强制转换
     * @return 返回对应值的Optional
     */
    <T> Optional<T> getStorageValue(@NonNull final String jobName, @NonNull final String key);

    /**
     * 获取流程已经产生的数据
     *
     * @param jobName 节点名称
     * @param key key
     * @param defaultValue 默认值
     * @param <T> 自动强制转换
     * @return 返回对应值, 值不存在则返回defaultValue
     */
    <T> T getStorageValueOrDefault(@NonNull final String jobName, @NonNull final String key, @NonNull final T defaultValue);

    /**
     * 增加debug日志
     */
    void addDebugLog(String content);

    /**
     * 增加info日志
     */
    void addInfoLog(String content);

    /**
     * 增加warning日志
     */
    void addWarnLog(String content);

    /**
     * 增加error日志
     *
     * @param content
     */
    void addErrorLog(String content);

    /**
     * 发送http get 请求
     *
     * @param url url
     * @param data ?后面的
     */
    String httpGet(@NonNull String url, @NonNull Map<String, String> data) throws IOException;

    /**
     * 发送 http post 请求
     *
     * @param url url
     * @param headers headers
     * @param data data
     */
    String httpPost(@NonNull String url,
                    @NonNull Map<String, String> headers,
                    @NonNull Map<String, ?> data) throws IOException;

    /**
     * 获取当前的id
     */
    long getJobExecutionId();

    /**
     * 获取flow当前产生的全部结果
     */
    Map<String, Object> getStorage();
}
```

## 实现执行逻辑

在组件的class中定义一个run方法即可。

```java
private void run()
```

## job执行状态

job的执行状态取决于run方法中是否抛了异常。

如果抛了就是为失败，没抛就是为成功。
