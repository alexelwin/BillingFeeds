/*******************
ProxyInterceptor.
used to proxy backend api calls to correct environment.
npm package grunt-connect-proxy has failed us once again and is not working for some reason. This interceptor is a backup mechanism.
*******************/
'use strict';

angular.module('billingFeedsApp').factory('proxyInterceptor', function($q, $injector ) {
  return {
  
    // optional method
    'request': function(config) {
      
      //API call so append host
      if(config.url.indexOf('/apiv1/') > -1)
      {
        var appSettings = $injector.get('appSettingsService');
        config.url = appSettings.getHost() + config.url;
      }

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
    }

    // optional method
   /*'responseError': function(rejection) {
      if (rejection.status === 401) {
            
            //if not authorized send to login page
            var stateService = $injector.get('$state');
            stateService.transitionTo('login');
        }

      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    }*/
  };
});