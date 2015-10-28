'use strict';

/**
 * @ngdoc overview
 * @name billingFeedsApp
 * @description
 * # billingFeedsApp
 *
 * Main module of the application.
 */
angular
  .module('billingFeedsApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'chart.js',
    'utils.smartTable'
  ])
  .config(['$stateProvider','$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
   
   //Default route
   $urlRouterProvider.otherwise('/iptraffic');

   //Angularjs Interceptor Services
   $httpProvider.interceptors.push('authenticationInterceptor');
   $httpProvider.interceptors.push('proxyInterceptor');

   //Angular UI Router 'state machine'
   $stateProvider
   .state('iptraffic',{
     url: "/iptraffic",
     templateUrl: "/views/iptraffic.html",
     controller: "iptrafficCtrl"
   })
   .state('mex',{
     url: "/mex",
     templateUrl: "/views/mex.html",
     controller: "mexCtrl"
   })
   .state('login',
    {
      url: "/login",
      templateUrl: "/views/login.html",
      controller: "loginCtrl"
    });

  }]);
