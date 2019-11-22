export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Documentation',
        children: []
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '文档',
        children: [

          {
            title: '快速启动',
            link: '/zh-cn/docs/quick_start.html',
          },
          // {
          //   title: '示例2',
          //   link: '/zh-cn/docs/demo2.html',
          // },
          {
            title: '定制部署',
            opened: true,
            children: [
              {
                title: '数据库',
                link: '/zh-cn/docs/custom-deployment/database.html',
              },
              {
                title: '用户管理',
                link: '/zh-cn/docs/custom-deployment/user.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
