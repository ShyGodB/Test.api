'use strict';

const { Service } = require('egg');

class UserService extends Service {
    async getUser() {
        try {
            const res = await this.app.mysql.select('user');
            return res;
        } catch (error) {
            console.log('--service/user--error: ', error)
            return null;
        }
    }
}

module.exports = UserService;