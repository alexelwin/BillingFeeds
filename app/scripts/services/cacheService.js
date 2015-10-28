
'use strict';

angular.module('billingFeedsApp').factory('cacheService', function($q){
 return {

  getIpgroupXref : function(){
   return JSON.parse(localStorage.getItem("ipgroupXref"));
  },
  setIpgroupXref : function(value){
  localStorage.setItem("ipgroupXref", JSON.stringify(value));
  }
 }
});