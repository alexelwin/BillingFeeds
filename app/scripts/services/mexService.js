'use strict';

/**
 * @ngdoc service
 * @name billingFeedsApp.mex
 * @description
 * # mex
 * Service in the billingFeedsApp.
 */
angular.module('billingFeedsApp')
  .service('mexService', function ($http,$resource,$q) {
     return {

     get : function(companyId , start , end){
      var resource = '/apiv1/mex/' + companyId + '?start=' + start + '&end=' + end;
      var deferred = $q.defer();

      //call service
      $http({ method: 'GET',
              url: resource })
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
