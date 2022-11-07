'use strict';

const { Service } = require('egg');

class UserService extends Service {
    async listUser(params) {
        try {
            const res = await this.app.mysql.query(`select * from user where id > 10000 limit ${params.limit} offset ${params.offset}`);
            return res;
        } catch (error) {
            console.log('--service/user--error: ', error)
            return null;
        }
    }

    async countUser() {
        try {
          const res = await this.app.mysql.count('user');
          console.log('res is', res);
          return res || 0;
        } catch (error) {
          return null;
        }
      }

    async createTempData(data) {
        try {
            const res = await this.app.mysql.insert('user', data);
            return res;
        } catch (error) {
            console.log('--service/user--插入临时数据错误', error);
            return null;
        }
    }
}

module.exports = UserService;