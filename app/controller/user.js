'use strict';
const Controller = require('egg').Controller;
const {
  URL,
  URLSearchParams,
} = require('url');
const {
  getSearch,
} = require('../../utils/search');
class UserController extends Controller {
  async list() {
    const search = getSearch(this.ctx);
    const list = await this.ctx.service.user.getList(search);
    this.ctx.body = list;
  }
  async info() {
    const userId = this.ctx.params.id;
    const userInfo = await this.ctx.service.user.find(userId);
    this.ctx.body = userInfo;
  }
}
module.exports = UserController;