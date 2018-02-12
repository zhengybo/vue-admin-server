

const base = rootRequire('controller/base.js');
const code = rootRequire('global/code.js');

module.exports = class user extends base{
  async login(ctx) {
    let {
      userName,
      password
    } = ctx.query;
    const flag = await ctx.service.user.index.login(userName,password);
    if(flag.really){
      this.success('',{token : flag.token,username : userName})
    }else {
      this.fail('0001')
    }
  }

  async getPermission(ctx){

    let {
      username,
      token,
    } = ctx.query;
    console.log('----------');
    const flag = await ctx.service.user.index.getPermission(username,token);
    if(flag){

    }
    this.success('',flag)
  }

  async getUserInfo(ctx){

    let {
      username,
      token,
    } = ctx.query;
    console.log('----------');
    const flag = await ctx.service.user.index.getUserInfo(username,token);
    if(flag){

    }
    this.success('',flag)
  }

}
