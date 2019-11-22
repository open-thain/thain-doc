import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Thain',
      briefIntroduction: 'Thain是一款小米自研的分布式调度平台',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
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
      title: '分布式易扩展的可视化DAG工作流任务调度系统',
      desc: 'Thain 是一个分布式去中心化，易扩展的可视化DAG工作流任务调度系统。致力于解决数据处理流程中错综复杂的依赖关系，使调度系统在数据处理流程中开箱即用。',
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
          content: '扩展资源，只需要部署新的服务端即可',
        },
        {
          img: '/img/feature_hogh.png',
          title: '操作简单',
          content: '去繁就简，只保留最核心的功能',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'HTTP 调用',
          content: '自带sdk，可以配合其他系统一起使用',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'SLA',
          content: '超时任务自动失败',
        },
      ],
    },
    users: {
      title: '谁在使用Thain',
      desc: <span>如果你也在用，请联系我们https://github.com/XiaoMi/thain/issues</span>,
      list: [
        '/img/xiaomi-logo.png',
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
          link: '/en-us/docs/demo1.html',
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
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
};
