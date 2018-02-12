'use strict';
const Controller = require('egg').Controller;
// const Code = require('./../global/code.js');

const Code = rootRequire('global/code.js');
module.exports = class Base extends Controller {
  callback(option){
    this.ctx.body = {
      returnSuccess : option.success,
      returnErrMsg : option.msg,
      returnCode : option.code || ''
    }
  }
  success(msg = '',data){
    this.ctx.body = {
      returnSuccess : true,
      returnErrMsg : msg,
      ...data
    }
  }
  fail(code,data){
    this.ctx.body = {
      returnSuccess : false,
      returnErrMsg : Code[code],
      returnCode : code,
      ...data
    }
  }
  error(msg,code=403){
    if (typeof data === 'string') {
      this.ctx.throw(code, data)
    } else {
      this.ctx.throw(data.code, data.msg)
    }
  }
  notFound (msg) {
    msg = msg || 'not found'
    this.ctx.throw(404, msg)
  }
}
