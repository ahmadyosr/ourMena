var ordersController = require('../orders/ordersController.js');
var userController = require('../users/userController.js');
var serviceProviderController = require('../users/serviceProviderController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.get('/:code', linksController.navToLink);

  app.post('/api/users/signinUsers', userController.signinAsUser);
  app.post('/api/users/signupUsers', userController.signupAsUser);
  app.get('/api/users/signedinUser', userController.checkAuthUser);
  app.post('/api/users/signinServiceProvider', serviceProviderController.signinServiceProvider);
  app.post('/api/users/signupServiceProvider', serviceProviderController.signupServiceProvider);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/orders/', ordersController.allOrder);
  app.post('/api/order/', ordersController.newOrder);
  app.post('/api/delivered', ordersController.delivered)

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

