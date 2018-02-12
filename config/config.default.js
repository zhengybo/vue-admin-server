'use strict';
require('./../app/global/rootRequire.js')() //注册rootRequire
module.exports = appInfo => {
  const config = exports = {
    view : {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      }
    },
    oss : {
      client: {
        accessKeyId: 'your access key',
        accessKeySecret: 'your access secret',
        bucket: 'your bucket name',
        endpoint: 'oss-cn-hongkong.aliyun.com',
        timeout: '60s',
      },
    },
    mysql : {
      // 单数据库信息配置
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'zhenbo',
        database: 'test',
      },
      app: true,
      agent: false,
    },
    io : {
      namespace: {
        '/': {
          connectionMiddleware: ['auth']
        },
        '/chat' : {
          connectionMiddleware: ['auth']
        },
        '/sendalarm' : {
          connectionMiddleware: ['auth']
        },
        '/send' : {
          connectionMiddleware: ['auth']
        }
      }
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510294296195_2071';

  // add your config here
  // config.middleware = [];

  return config;
};
// exports.keys = '_1509786116591_4323';
