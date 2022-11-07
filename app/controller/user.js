'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async getUser() {
    const { ctx } = this;
    const res = await ctx.service.user.getUser();
    if (res && res.length > 0) {
      ctx.body = res;
    } else {
      ctx.body = '请求错误'
    }
    ctx.body = res;
  }
}

module.exports = UserController;
