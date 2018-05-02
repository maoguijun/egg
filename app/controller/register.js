'use strict';
const Controller = require('egg').Controller;
class RegisterController extends Controller {
  async index() {
    console.log(this.ctx.request);
    // const userInfo = await this.ctx.service.user.insert(obj);
    this.ctx.body = '接口还在写';
  }
}
module.exports = RegisterController;
