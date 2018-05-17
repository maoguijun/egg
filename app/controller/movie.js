'use strict';
const Controller = require('egg').Controller;
const {
  getSearch,
} = require('../../utils/search');
class MovieController extends Controller {
  async list() {
    const list = await this.ctx.service.movie.getList(getSearch(this.ctx));
    this.ctx.body = list;
  }
  async info() {
    console.log(this.ctx.params.id);
  }
}
module.exports = MovieController;