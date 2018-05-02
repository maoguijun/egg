'use strict';
const cheerio = require('cheerio');
const request = require('request');
request.defaults({ jar: true }); // 保持cookie
let i = 0; // 起始页
const num = 9999; // 结束页
module.exports = (url, cb) => {
  i++;
  console.log(`当前进度：${i}/${num}`);
  request.get(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body); // 采用cheerio模块解析html
      const leng = $('a.movie-box').length;
      const arr = [];
      const j = 0;
      const obj = getObj(leng, arguments.callee);
    }
  });
};
const getObj = (leng, cb) => {
  const detailUrl = $('a.movie-box')
    .eq(j)
    .prop('href');
  const imgUrl = $('.photo-frame img')
    .eq(j)
    .prop('src');
  const title = $('.photo-frame img')
    .eq(j)
    .prop('title');
  const fanhao = $('.photo-info span date:nth-child(2)')
    .eq(j)
    .html();
  const date = $('.photo-info span date:last-child')
    .eq(j)
    .html();

  const obj = {
    detailUrl,
    imgUrl,
    title,
    fanhao,
    date,
  };
  j++;
  if (j < leng) {
    arguments.callee(j, leng);
  } else {
    cb('https://javmoo.net/cn/page/2');
  }
  return obj;
};
const insertData = obj => {
  return new Promise((resolve, reject) => {
    cb('movies', obj);
  });
};
start('https://javmoo.net/cn');

function add(i) {
  console.log(arguments);
}
