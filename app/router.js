'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/', controller.home.index);
  router.get('/user/:id', controller.user.info);
  router.post('/register', controller.register.index);
  router.post('/login/account', controller.loginAccount.index);
  // router.post('/init', controller.init.index);
};
