'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async createTempData() {
    const { ctx } = this;
    const count = 1000;
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        nickName: '虚拟昵称' + (i < 10 ? '0' + i : i),
        realName: '虚拟姓名' + (i < 10 ? '0' + i : i),
        phone: 13899999999 - i + '',
        password: '',
        avatar: '',
        gender: i % 2 === 0 ? 'man' : 'woman',
        regSource: 'app',
      })
    }
    await ctx.service.user.createTempData(data);
    ctx.body = 'ok';
  }
}

module.exports = HomeController;
