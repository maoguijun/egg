'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
class InitService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async restart() {
    // 初始化数据库
    // const data = await fs.readFileSync(
    //   path.join(__dirname) + '/../../sql/sql.sql'
    // );
    // console.log(data);
    // if (!data) return;
    const user = await this.app.mysql.query('');
    console.log(user);
    return user;
  }
}
module.exports = InitService;
