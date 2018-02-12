
module.exports = app => {
  class HomeController extends app.Controller {

    async login(ctx) {
      // console.log(ctx);
      console.log(__dirname);
      let {
        userId,
        password
      } = ctx.query;

      // console.log(ctx.service.,'-----');
      const flag = await this.ctx.service.login.index.login(userId,password);
      ctx.body = {
        returnCode : 3232,
        returnSuccess : flag,
        returnErrMsg : flag ? '' : '账户或密码错误',
        token : 'edfsadsadsa'
      }
    }

    async delete() {

      const user = await this.ctx.service.mysql.delete();
      this.ctx.body = user;
    }
  }
  return HomeController;
};
