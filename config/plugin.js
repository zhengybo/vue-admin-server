'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  oss : {
    enable: true,
    package: 'egg-oss',
  },
  cookies : {
    enable: true,
    package: 'egg-cookies',
  },
  mysql : {
    enable: true,
    package: 'egg-mysql',
  },
  nunjucks : {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  io : {
   enable: true,
   package: 'egg-socket.io',
  }
}
