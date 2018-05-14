'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/', controller.home.index);
  router.get('/api/user/:id', controller.user.info);
  router.post('/api/register', controller.register.index);
  router.post('/api/login/account', controller.loginAccount.index);
  // router.post('/init', controller.init.index);
};
