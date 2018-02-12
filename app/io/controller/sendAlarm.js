'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index(ctx) {
      const message = this.ctx.args[0];
        // console.log(this.ctx.app.io.to(app.user.sendalarm).emit('res','xxxxdd'));
        let result = {
            "monitorItem": {
                'name' :  message.name || '',
                "level" : message.level, //CRITICAL(紧急) | MAGOR(严重) | WARNING（警告）
            },
            "warningData": {
                "id": message.id, //id
                "updateTime": 1513839846907,
                "itemId": "5a38bea9cf7ec81c0958f179",
                "applicationName": message.sounce, //告警源
                "firstTime": 1513736391819, //第一次时间
                "latestTime": 1513839846905, //最近时间
                "times": 5, //次数
                "status": message.status, //CLEAR
            }
        }
        app.io.nsps['/'].emit('res',result)

    }
  }
  return Controller;
};
