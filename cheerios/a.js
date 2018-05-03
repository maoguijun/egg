'use strict';
const cheerio = require('cheerio');
const request = require('request');
const moment = require('moment');
request.defaults({ jar: true }); // 保持cookie
const getObj = (j, leng, $) => {
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
  return obj;
};

// cb('https://javmoo.net/cn/page/2');

const insertData = async function(obj, ctx, j) {
  console.log(obj);
  // obj = {
  //   ...obj,
  //   createAt: moment(),
  // };
  const result = await ctx.app.mysql.insert('movies', obj);
  console.log('result', result);
  return j++;
};
const start = (url, ctx, i, num) => {
  /** 开始爬 url：目标网站url,cb：插入数据库的方法，i:起始页，num：最大页数 */
  request.get(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(body); // 采用cheerio模块解析html
      const leng = $('a.movie-box').length;
      let j = 0;
      console.log(leng);
      const obj = getObj(j, leng, start, $);
      insertData(obj, ctx, j).then(e => {
        j = e;
        console.log('j', j);
      });
      // if (j === leng) {
      //   cb(`https://javmoo.net/cn/page/${i++}`);
      // } else {

      // }
    }
  });
};
module.exports = start;
