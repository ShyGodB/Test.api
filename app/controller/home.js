'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async userList() {
    const { ctx } = this;
    ctx.body = { list: [] }
  }
}

module.exports = HomeController;
