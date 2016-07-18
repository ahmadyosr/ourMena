// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('GS.auth', [])

.controller('AuthController', function ($scope, $window, $location) {
  $scope.user = {};

  $scope.signinUser = function () {
    Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.GS', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

   $scope.signinServiceProvider = function () {
    Auth.signinServiceProvider($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.GS', token);
        $location.path('/serviceprovider');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signupUser = function () {
    Auth.signupUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.GS', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

    $scope.signupServiceProvider = function () {
    Auth.signupServiceProvider($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.GS', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
