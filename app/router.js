'use strict';

module.exports = app => {
  // console.log(app.io.controller.sendAlarm.index,'-----------');
  // const chat = app.io.of('/');
  app.io.of('/').route('chat', app.io.controller.chat.index);
  const sendAlarm = app.io.of('/sendalarm');
  // sendAlarm.on('connection',function(socket){
  //
  // });
  sendAlarm.route('sendalarm', app.io.controller.sendAlarm.index)
  app.io.of('/chat').route('chat', app.io.controller.sendAlarm.index);
  require('./router/api')(app);
  require('./router/page')(app);

};
