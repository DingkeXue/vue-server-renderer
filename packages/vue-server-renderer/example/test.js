/*
 * @Author: DingkeXue
 * @Date: 2022-03-22 19:57:21
 * @Description: 用户测试
 */
const Vue = require('vue')
const template = require('fs').readFileSync(require('path').resolve(__dirname, './index.template.html'), 'utf-8')
const renderer = require('../build.dev').createRenderer({
  template
})

const context = {
  title: 'hello world',
  meta:`
    <meta name="keyword" content="vue,ssr">
    <meta name="description" content="vue srr demo">
  `,
}

const app = new Vue({
  render: (h) => h('div', 'hello world')
})


renderer.renderToString(app, context, (err, html) => {
  console.log(err, html)
})
