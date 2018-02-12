module.exports = app => {
  app.get('/',app.middlewares.lib.index('index'), app.controller.home.index);
  app.get('/index',app.middlewares.lib.index('index'), app.controller.home.index);
  app.get('/news',app.middlewares.lib.index('news'), app.controller.home.index);
  app.get('/proposal',app.middlewares.lib.index('proposal'), app.controller.home.index);
  app.get('/activity',app.middlewares.lib.index('activity'), app.controller.home.index);
  app.get('/contact',app.middlewares.lib.index('contact'), app.controller.home.index);
  app.get('/sendAlarm', app.controller.web.sendAlarm.index.send);
  app.get('/receiveAlram', app.controller.web.receiveAlram.index.send);
}
