'use strict';
const moment = require('moment');
const { fomratArgs } = require('../workConfig.js');
exports.formatData = data => {
  for (const key in data) {
    if (fomratArgs.some(i => i === key)) {
      data[key] = moment(data[key]).format('YYYY-MM-DD HH:mm:ss');
    }
  }
  return data;
};
