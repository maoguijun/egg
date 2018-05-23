'use strict'
const {
  URL
} = require('url')
exports.getSearch = ctx => {
  const url = new URL('http://' + ctx.request.header.host + ctx.request.url);
  const search = {};
  url.searchParams.forEach((value, name, searchParams) => {
    if (['limit', 'offset'].find(item => item == name)) {
      search[name] = parseInt(value) || value;
    } else {
      if (!value) return
      if (value.indexOf(',') > 0) {
        value = value.split(',')
      }
      search.where = {
        ...search.where,
        [name]: value
      }
    }
  });
  console.log('search', JSON.stringify(search))
  return search;
}