module.exports = app => {
  class HomeController extends app.Controller {

    async update(ctx) {
      console.log(ctx);
      const user = await this.ctx.service.mysql.update();
      this.ctx.body = user;
    }

    async delete() {

      const user = await this.ctx.service.mysql.delete();
      this.ctx.body = user;
    }
  }
  return HomeController;
};
