'use strict';
const start = require('../../cheerios/a');
module.exports = {
  schedule: {
    interval: '20s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    start;
  },
};
