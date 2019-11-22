import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Thain',
      briefIntroduction: 'Thain是一款小米自研的分布式调度平台',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/quick_start.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/XiaoMi/thain',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '高可用分布式可视化DAG流式任务调度平台',
      desc: 'Thain 是小米自研的新一代分布式任务调度平台，提供定时、任务编排、分布式跑等功能。 Thain提供了任务调度与执行的一整套解决方案，在小米集团内部使用并久经考验，具有易学习、易上手、开发高效稳定的特点。 有完善的后台管理界面，支持任务的依赖，任务执行情况查看',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '插件化',
          content: '自定义一个插件只需要简单的一个java类',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '高可用',
          content: '不需要配置ZooKeeper等框架，自身就可以HA，不用担心机器突然挂掉',
        },
        {
          img: '/img/feature_service.png',
          title: '易扩展',
          content: '横向扩展，只需要部署新的服务端即可',
        },
        {
          img: '/img/feature_hogh.png',
          title: '去繁就简',
          content: 'Keep It Simple, Stupid 只保留最核心的功能。一切扩展让用户自己决定',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'HTTP 调用',
          content: '自带SDK，可以配合其他系统一起使用',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'SLA',
          content: '任务执行时长得到充分的保证',
        },
      ],
    },
    // start: {
    //   title: '快速开始',
    //   img: '/img/quick_start.png',
    //   button: {
    //     text: '阅读更多',
    //     link: '/zh-cn/docs/quick_start.html',
    //   },
    // },
    users: {
      title: '谁在使用Thain',
      desc: <span>如果你也在用，请联系我们https://github.com/XiaoMi/thain/issues</span>,
      list: [
        '/img/xiaomi-logo.jpg',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Thain',
      briefIntroduction: 'Thain is a distributed flow schedule platform.',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/wip.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/XiaoMi/thain',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'A distributed and easy-to-expand visual DAG workflow scheduling system',
      desc: 'Dedicated to solving the complex dependencies in data processing, making the scheduling system out of the box for data processing. Its main objectives are as follows:',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Plugins',
          content: 'Customizing a plugin requires only a simple java class.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'High availability',
          content: 'You don\'t need to configure a framework such as ZooKeeper, you can HA yourself, don\'t worry about the machine suddenly hangs.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Easy to scale',
          content: 'Scale out, you only need to deploy a new server.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Keep It Simple, Stupid',
          content: 'Going to the simple, only retaining the most core functions.',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'HTTP call',
          content: 'Comes with the SDK and can be used with other systems.',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'SLA',
          content: 'The duration of the task is fully guaranteed.',
        }
      ]
    },
    // start: {
    //   title: 'quick start',
    //   img: '/img/quick_start.png',
    //   button: {
    //     text: 'read more',
    //     link: '/zh-cn/docs/quick_start.html',
    //   },
    // },
    users: {
      title: 'Who is using Thain',
      desc: <span>If you are also using, please contact us at https://github.com/XiaoMi/thain/issues</span>,
      list: [
        '/img/xiaomi-logo.jpg',
      ],
    },
  },
};
