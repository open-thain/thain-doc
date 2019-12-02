export default {
  "en-us": {
    sidemenu: [
      {
        title: "Documentation",
        children: []
      }
    ],
    barText: "Documentation"
  },
  "zh-cn": {
    sidemenu: [
      {
        title: "基本操作",
        children: [
          {
            title: "快速启动",
            link: "/zh-cn/docs/quick_start.html"
          },
          {
            title: "页面使用",
            opened: true,
            children: [
              {
                title: "创建Flow",
                link: "/zh-cn/docs/page-usage/create-flow.html"
              }
            ]
          },
          {
            title: "定制部署",
            opened: true,
            children: [
              {
                title: "数据库",
                link: "/zh-cn/docs/custom-deployment/database.html"
              },
              {
                title: "用户管理",
                link: "/zh-cn/docs/custom-deployment/user.html"
              }
            ]
          },
          {
            title: "HTTP回调",
            link: "/zh-cn/docs/http-callback.html"
          }
        ]
      },
      {
        title: "组件使用",
        children: [
          {
            title: "std组件说明",
            link: "/zh-cn/docs/component/introduction.html"
          },
          {
            title: "std组件",
            opened: true,
            children: [
              {
                title: "Shell",
                link: "/zh-cn/docs/component/std/shell.html"
              },
              {
                title: "HTTP",
                link: "/zh-cn/docs/component/std/http.html"
              },
              {
                title: "邮件",
                link: "/zh-cn/docs/component/std/mail.html"
              }
            ]
          }
        ]
      },
      {
        title: "FAQ",
        children: []
      }
    ],
    barText: "文档"
  }
};
