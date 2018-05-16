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
const start = (url, ctx, i, num) => {
  /** 开始爬 url：目标网站url,cb：插入数据库的方法，i:起始页，num：最大页数 */
  request.get(url + '/page/' + i, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(body); // 采用cheerio模块解析html
      const leng = $('a.movie-box').length;
      let j = 0;
      const parse = async () => {
        console.log(`当前是${i}/${num} 页，当前是${j}/${leng} 条数据，`);
        const obj = getObj(j, leng, $);
        // 先判断数据库中是否有这条数据，根据detailUrl 来判断
        const hasData = await ctx.app.mysql.get('movies', {
          detailUrl: obj.detailUrl,
        });
        if (!hasData && obj.detailUrl) {
          await ctx.app.mysql.insert('movies', obj);
        }
        j++;
        if (j <= leng) {
          parse();
        } else {
          i++;
          if (i <= num) {
            start(url, ctx, i, num);
          }
        }
      };
      parse();
    }
  });
};
module.exports = start;
