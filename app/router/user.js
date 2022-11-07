'use strict'

module.exports = (app) => {
    const { router, controller } = app;
    router.get('/listUser', controller.user.listUser);
}