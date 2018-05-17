'use strict';
const Service = require('egg').Service;
class MovieService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async find(id) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    console.log(id);
    const user = await this.app.mysql.get('user', {
      uid: id,
    });
    return user;
  }
  async getList(search) {
    console.log(search)
    const all = await this.app.mysql.select('movies');
    const count = all.length;
    const list = await this.app.mysql.select('movies', search);
    return {
      rows: list,
      count,
    };
  }
}
module.exports = MovieService;