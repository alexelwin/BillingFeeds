
'use strict';

/**
 * @ngdoc factory
 * @name billingFeedsApp.authService
 * @description
 * # authService
 * provide billing feed auth services;
 */
angular.module('billingFeedsApp')
  .factory('authService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name currentUserToken
    * @methodOf billingFeedsApp.authService
    * @returns string token for authentication purposes
    */
     getCurrentUserToken : function(){
      return window.localStorage.getItem('currentUserToken');
      },

     setCurrentUserToken : function(token){
      window.localStorage.setItem('currentUserToken', token);
     },

     login : function(user,pass){
        var resource = '/apiv1/token';
        var deferred = $q.defer();

        //call service
        $http({ method: 'POST',
                url: '/apiv1/token',
                data: 'grant_type=password&username=' + user + '&password=' + pass, //grant_type=password&username=xxxX&password=xxx
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
              })
        .success( function(data, status, headers, config){
          deferred.resolve(data);
         })
        .error( function(data, status, headers, config){
           deferred.reject();
         });
        
        //return asynch results
        return deferred.promise;
     }

  }

});