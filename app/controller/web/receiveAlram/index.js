module.exports = app => {
  class Index extends app.Controller {

    async send() {
      console.log('-=');
      await this.ctx.render('page/levelOne/receiveAlram/index.html', {
        scripts : [
          '/public/js/lib/jquery-1.10.2.min.js',
          '/public/js/lib/socket.io.js'
        ]
      })
    }

  }
  return Index;
};
