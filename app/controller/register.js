'use strict';
const Controller = require('egg').Controller;
const moment = require('moment');
class RegisterController extends Controller {
  async index() {
    console.log('发送来的数据', this.ctx.request.body);
    const userInfo = await this.ctx.service.register.insert(
      this.ctx.request.body
    );
    this.ctx.body = userInfo;
  }
}
module.exports = RegisterController;
