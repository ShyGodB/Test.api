'use strict'

module.exports = (app) => {
    const { router, controller } = app;
    router.get('/getUser', controller.home.getUser);
}