(function() {
  'use strict';

  angular
    .module('strava.auth', [])
    .controller('AuthController', AuthController); 

  function AuthController ($scope, $window, $location, Auth) {
    $scope.user = {};

    $scope.signin = function () {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.strava', token);
          $location.path('/compete');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    $scope.signup = function () {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.strava', token);
          $location.path('/compete');
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  });

})();
