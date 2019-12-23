<!--
 Copyright (c) 2019, Xiaomi, Inc.  All rights reserved.
 This source code is licensed under the Apache License Version 2.0, which
 can be found in the LICENSE file in the root directory of this source tree.
-->

# 组件定义

组件通过 json 进行的定义。

## 目的

1. 前端可拖动组件的生成
1. 后端创建 flow 的时候，对 job 输入的内容进行校验

## 组件定义 json 的格式

一个满足标准的 json，需要满足如下 typescript 定义。

可以用[这个网站](https://app.quicktype.io/)生成 json 定义

```ts
export interface ComponentDefine {
  group: string;
  name: string;
  hidden: boolean;
  items: ComponentDefineItem[];
}

export interface ComponentDefineItem {
  /**
   * 传到后端的key
   */
  property: string;
  /**
   * 是否必填，false 或不写 则为不是必填
   */
  required?: boolean;
  /**
   * 输入框前面的标识，不写默认用property
   */
  label?: string;
  input:
    | {
        id: "line" | "textarea" | "sql" | "shell" | "richText" | "uploadBase64";
      }
    | {
        id: "select";
        options: Array<{
          /**
           * 属性的值
           */
          id: string;
          /**
           * 下拉框中的候选项，不写用id代替
           */
          name?: string;
        }>;
      };
}
```

## 举个例子

参考 std::mail 组件的 json 定义。

```json
{
  "group": "std",
  "name": "mail",
  "hidden": false,
  "items": [
    {
      "property": "title",
      "label": "邮件标题",
      "required": true,
      "input": {
        "id": "textarea"
      }
    },
    {
      "property": "contentHtml",
      "label": "邮件内容",
      "required": true,
      "input": {
        "id": "richText"
      }
    },
    {
      "property": "recipient",
      "label": "收件人（多个用逗号隔开）",
      "required": true,
      "input": {
        "id": "textarea"
      }
    }
  ]
}
```

group: 组件分类

name: 组件名称

hidden: 组件在前端是否影藏

item: 每一个 property 都是用户可以在页面输入的项

## 页面支持的 input 类型

1. line
   - 单行文本框
1. textarea
   - 多行文本框
1. sql
   - sql 输入框
1. shell
   - shell 输入框
1. richText
   - 富文本编辑器
1. uploadBase64
   - 文件上传
1. select
   - 下拉单选框

如果还有你需要的，可以提 issus。
