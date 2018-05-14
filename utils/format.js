'use strict';
const moment = require('moment');
const { fomratArgs } = require('../workConfig.js');
exports.formatData = data => {
  Object.keys(data).forEach(key => {
    if (fomratArgs.some(i => i === key)) {
      data[key] = moment(data[key]).format('YYYY-MM-DD HH:mm:ss');
    }
  });
  return {
    status: 'ok',
    obj: data,
  };
};

exports.formatRequestObj = (obj, keys) => {
  Object.keys(obj).forEach(key => {
    if (keys.every(item => item.key !== key)) {
      delete obj[key];
    } else {
      let required = false;
      keys.forEach(item => {
        if (item.key === key) {
          required = item.required;
        }
      });
      if (required && !obj[key]) {
        throw new Error(`${key} is required`);
      }
    }
  });
  return obj;
};
