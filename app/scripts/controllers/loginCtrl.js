'use strict';

/**
 * @ngdoc function
 * @name billingFeedsApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the billingFeedsApp
 */
angular.module('billingFeedsApp')
  .controller('loginCtrl', function ($scope, $state, authService) {
    $scope.loadingState = false;
    $scope.loginError = false;

    $scope.init = function(){
      $scope.user = '';
      $scope.pass = '';
    }

    /**
    * @ngdoc function
    * @name attemptLogin
    * @description
    * # loginCtrl
    * attempt login with supplied user credentials
   */
    $scope.attemptLogin = function(){
    
        $scope.loadingState = true;
        authService.login($scope.user, $scope.pass).then( function(results){
        authService.setCurrentUserToken(results.access_token);
        $scope.loadingState = false;       
        $state.transitionTo('iptraffic');
      },
      function(error){
        $scope.loadingState = false;
        $scope.loginError = true;
      });
    }
        
    $scope.init();

  });
