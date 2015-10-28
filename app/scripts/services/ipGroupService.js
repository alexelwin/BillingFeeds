
'use strict';

/**
 * @ngdoc factory
 * @name billingFeedsApp.ipGroupService
 * @description
 * # domainService
 * provide billing feed ipgroup services;
 */
angular.module('billingFeedsApp')
  .factory('ipGroupService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name list
    * @methodOf billingFeedsApp.ipGroupService
    * @returns {list of all ipGroups}
    */
     list : function(){
      var resource = '/apiv1/ipgroup/names';
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