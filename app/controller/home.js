'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = { a: 'asdfasdf' };
  }
}

module.exports = HomeController;
