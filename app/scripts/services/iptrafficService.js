'use strict';

/**
 * @ngdoc service
 * @name billingFeedsApp.ipTraffic
 * @description
 * # ipTraffic
 * Service in the billingFeedsApp.
 */
angular.module('billingFeedsApp')
  .service('iptrafficService', function ($http, $q, $resource) {
    return {
    /**
    * @ngdoc method
    * @name Get
    * @methodOf billingFeedsApp.iptrafficService
    * @returns {list of iptraffic results for given group}
    */
     getGraph : function(group, start, end){
      var resource = '/apiv1/iptraffic/graph?start=' + start + '&end=' + end  + '&group=' + group;
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
     },

     /**
    * @ngdoc method
    * @name Get
    * @methodOf billingFeedsApp.iptrafficService
    * @returns {list of iptraffic results for given group}
    */
     get : function(group, start, end){
      var resource = '/apiv1/iptraffic?start=' + start + '&end=' + end  + '&group=' + group;
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
