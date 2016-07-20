angular.module('GS.Users', [])

.controller('UserController', function ($scope, Orders) {
  // Your code here
  ///this function must call on submit click
  $scope.order = {};
  $scope.order.totalPrice = 0;
  var prices = {gasCylinder: 8, water: 1, diesel: 5};
  $scope.order.serviceType;
  $scope.getVal=function(event){
      $scope.order.serviceType = event.currentTarget.value;
      console.log($scope.order.serviceType)
  }
    $scope.order.totalPrice = parseInt($scope.order.quantity) * prices[$scope.order.serviceType];
  $scope.addOrder=function(){
  	console.log($scope.order)
  	Orders.addOneOrder($scope.order).then(function(){
  	})
  	.catch(function(err){
  		console.log(err);
  	})
  }
});
