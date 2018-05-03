'use strict';
const Controller = require('egg').Controller;
class InitController extends Controller {
  async index() {
    const userInfo = await this.ctx.service.init.restart();
    this.ctx.body = userInfo;
  }
}
module.exports = InitController;
