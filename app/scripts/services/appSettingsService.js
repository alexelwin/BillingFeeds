
'use strict';

/**
 * @ngdoc factory
 * @name billingFeedsApp.appSettings
 * @description
 * # appSettingsService
 * provide appSettings
 */

angular.module('billingFeedsApp')
  .factory('appSettingsService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name currentUserToken
    * @methodOf billingFeedsApp.appSettingsService
    */
     getHost : function(){
     return 'https://localhost:44300';
      },
  }

});
