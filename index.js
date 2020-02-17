const { getOptions } = require('loader-utils');

const process = require('process')


// '{{config.celebrityName}}'

/**
 * 作者: 家
 * QQ: 203118908
 * 功能: 用于webpack的loader 预处理autojs格式的文件
 */

// var xml添加反引号 = function (content) {
//   // return content.replace(/ui.layout\((.*?)\)/g, "ui.layout(`$1`)")
//   console.log('xml添加反引号  开始')
//   if (content.indexOf('{{') !== -1) {
//     console.log('xml的代码 =')
//     console.log(content)
//     content = content.replace(/'\{\{(.*?)\}\}'/, '`$${$1}`')
//     console.log('xml的代码替换后 =')
//     console.log(content)
//   }
//   return content
// }

var someAsyncOperation = function (content, callback, options) {
  console.log(options)
 

  var err = ''
  try {
    console.log('this is webpack-autojs-xml-replace-curlybraces ===============   开始')
    console.log(options.celebrityName)

    for (var k in options) {
      var re = new RegExp("{{" + k + "}}", "g");
      content = content.replace(re, options[k]);
    }
    console.log(content)
    console.log('this is webpack-autojs-xml-replace-curlybraces ===============  结束')

  } catch (e) {
    err = e;
  }
  callback(err, content)
}

module.exports = function (content, map, meta) {
  console.log('this is webpack-autojs-xml-replace-curlybraces ===============  this 开始')
  let options = getOptions(this)
  console.log('this is webpack-autojs-xml-replace-curlybraces ===============  this 结束')
  var callback = this.async();
  someAsyncOperation(content, function (err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  }, options);
};

// export default "<vertical>\r\n  <button id='eat'>eat</button>\r\n  <button id='bark'>bark</button>\r\n  <button id='goToBed'>goToBed</button>\r\n  <input id='num' w=\"*\"></input>\r\n  <button id='readNum'>readNum</button>\r\n  <text id='log' gravity='center' textSize='30sp'></text>\r\n  <vertical>\r\n    <text id='celebrityName' gravity='center' textSize='30sp' text='{{config.celebrityName}}' textStyle='bold'></text>\r\n    <img id='celebrityImg' src='https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C550%2C363%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f9f13c559482d158afcd03f1bd3a35e8/7e3e6709c93d70cf133f10b6f0dcd100bba12b47.jpg' ></img>\r\n  </vertical>\r\n</vertical>";