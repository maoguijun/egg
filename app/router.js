'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/api/', controller.home.index);
  router.get('/api/userlist', controller.user.list);
  router.get('/api/user/:id', controller.user.info);
  router.post('/api/register', controller.register.index);
  router.post('/api/login/account', controller.loginAccount.index);
  // app 上的
  router.get('/app/movielist', controller.movie.list);
};