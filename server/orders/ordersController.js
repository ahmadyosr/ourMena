var Order = require('./orderModel.js');
    Q = require('q');
    util = require('../config/utils.js');

// Promisify a few mongoose methods with the `q` promise library
var findOrder = Q.nbind(Order.findOne, Order);
var createOrder = Q.nbind(Order.create, Order);
var findAllOrders = Q.nbind(Order.find, Order);

module.exports = {

  allOrders: function (req, res, next) {
  findAllOrders({})
    .then(function (orders) {
      res.json(orders);
    })
    .fail(function (error) {
      console.error(error);
    });
  },

  newOrder: function (req, res, next) {
    var type = req.body.type;
    var quantity = req.body.quantity;
    var username;
    var newOrder = {
            type: type,
            quantity: quantity,
            username: username
          };
    createOrder(newOrder)
    .then(function (createdOrder) {
        if (createdOrder) {
          res.json(createdOrder);
        }
      })
      .fail(function (error) {
        console.err(error);
      });
  }
};
