'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // await ctx.render('index.html', {
    //   id: 100,
    //   name: '小红',
    //   age: 18,
    //   skill: '打麻将',
    //   // currentTime: app.currentTime()
    // });
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
