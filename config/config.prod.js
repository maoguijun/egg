'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525244017692_5244';

  // add your config here
  config.middleware = [];

  // add mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '119.29.91.202',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'egg_test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    domainWhiteList: [ 'http://119.29.91.202:3000', 'http://119.29.91.202:8000' ],
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
