module.exports = app => {
  app.get('/api/login', app.controller.api.user.index.login);
  app.get('/api/permission', app.controller.api.user.index.getPermission);
  app.get('/api/userInfo', app.controller.api.user.index.getUserInfo);
}
