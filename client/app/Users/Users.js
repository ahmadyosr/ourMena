angular.module('GS.Users', [])

.controller('UserController', function ($scope, Orders) {
  // Your code here
  ///this function must call on submit click
  var addOrder=function(order){
  	Orders.addOneOrder(order).then(function(){
  	})
  	.catch(function(err){
  		console.log(err);
  	})
  }
});
