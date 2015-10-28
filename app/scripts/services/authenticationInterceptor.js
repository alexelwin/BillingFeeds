
'use strict';

angular.module('billingFeedsApp').factory('authenticationInterceptor', function($q, $injector) {
  return {
  
    // optional method
    'request': function(config) {
      
      //If trying to login do nothing
      if(config.url == '/views/login.html' || config.url == '/apiv1/token')
      {
        return config;
      }

      //must use injector service in interceptor or circular dependency will generate error.
      var authService = $injector.get('authService');
      
      //add existing auth token if found
      var token = authService.getCurrentUserToken();
      if(token != null){
        config.headers.Authorization = 'Bearer ' +  token;
        return config;     
      }
      
      //No token & not requesting one so redirect to login!!
      var stateService = $injector.get('$state');
      stateService.transitionTo('login');
      
      
      return config;
    },

    // optional method
   'requestError': function(rejection) {
      // do something on error
      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    },



    // optional method
    'response': function(response) {
      // do something on success
      return response;
    },

    // optional method
   'responseError': function(rejection) {
      if (rejection.status === 401)  //not authorized
         {
              var stateService = $injector.get('$state');
              stateService.transitionTo('login');
          }
      if( rejection.status === 400 && (rejection.config.url.indexOf('/views/login.html') > -1 || rejection.config.url.indexOf('/apiv1/token') > -1 )) //'bad request' logging in
        {   
              var stateService = $injector.get('$state');
              stateService.transitionTo('login');  
        } 

        return $q.reject(rejection);
  }
  };
});