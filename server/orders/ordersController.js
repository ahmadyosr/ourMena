var Order = require('./orderModel.js');
   User=require('../users/userModel.js')
    Q = require('q');
    // util = require('../config/utils.js');

// Promisify a few mongoose methods with the `q` promise library
var findOrder = Q.nbind(Order.findOne, Order);
var createOrder = Q.nbind(Order.create, Order);
var findAllOrders = Q.nbind(Order.find, Order);
var findUser = Q.nbind(User.findOne, User);
var updateOrder = Q.nbind(Order.findOneAndUpdate, Order);

module.exports = {

  allOrders: function (req, res, next) {

  findAllOrders({})
    .then(function (orders) {
      for (var i = 0; i < orders.length; i++) {
        findUser({username: orders[i].username})
        .then(function (user) {
          if(user){
            orders[i].fullName = user.fullName;
            orders[i].phoneNumber = user.phoneNumber;
            orders[i].address = user.address;
          }
        })
      }
      res.json(orders);
    })
    .fail(function (error) {
      console.error(error);
    });
  },

  newOrder: function (req, res, next) {
    var type = req.body.type;
    var quantity = req.body.quantity;
    var username = req.body.username;
    var totalPrice = req.body.totalPrice;
    var newOrder = {
            type: type,
            quantity: quantity,
            username: username,
            totalPrice: totalPrice
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
  },

  delivered: function(req, res, next) {
    // find the order and change the delivered
    var order_id=req.body.order_id;
    findOneAndUpdate({order_id:order_id},{$set:{delivered:"true"}},function(err,doc){
      if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
    })
  }
};
