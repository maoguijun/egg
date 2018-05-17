'use strict';
const start = require('../../cheerios/a');
module.exports = {
  schedule: {
    // interval: '2 days', // 1 分钟间隔
    // interval: '10 s', // 1 分钟间隔
    cron: '0 00 14 * * *',
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // ctx.app.mysql.insert('movies', {
    //   id: '123465',
    //   detailUrl: 'aa',
    //   imgUrl: 'aa',
    //   title: 'title',
    //   date: '2018-05-26',
    //   createAt: new Date().getUTCMilliseconds(),
    // });
    console.log('开始执行');
    start('https://javlog.com/cn', ctx, 1, 4);
  },
};