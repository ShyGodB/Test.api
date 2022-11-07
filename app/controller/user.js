'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async listUser() {
    const { ctx } = this;
    const params = ctx.params();
    const { limit, offset } = ctx.helper.calcLimitAndOffset(params.pageIndex, params.pageSize);
    params.limit = limit;
    params.offset = offset;
    const count = await ctx.service.user.countUser();
    const res = await ctx.service.user.listUser(params);
    if (res && res.length > 0) {
      ctx.body = {
        status: 200,
        count: count,
        list: res.map(item => {
          return {
            id: item.id,
            nickName: item.nickName,
            realName: item.realName,
            phone: item.phone,
            regSource: item.regSource,
            createTime: this.app.moment(item.createTime).format('YYYY-MM-DD hh:mm:ss')
          }
        })
      };
    } else {
      ctx.body = '请求错误'
    }
  }
}

module.exports = UserController;
