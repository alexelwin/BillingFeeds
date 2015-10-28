'use strict';

/**
 * @ngdoc function
 * @name billingfeedsApp.controller:MexctrlCtrl
 * @description
 * # mexCtrl
 * Controller of the billingfeedsApp
 */
angular.module('billingFeedsApp')
  .controller('mexCtrl', function ($scope, smartTableUtils, mexService) {
   
   $scope.loadingState = false;
   $scope.isViewingResults = false;
   $scope.start = '';
   $scope.end = '';

  /**
   * @ngdoc function
   * @name init
   * @description
   * # init
   * initialise the controller*/
    $scope.init = function(){

        //default the report period
        $scope.end = new Date();
        $scope.start = new Date();
        $scope.start.setMonth($scope.end.getMonth() -1);
    }
         
      $scope.init();
      
    
    /**
   * @ngdoc function
   * @name generateReport
   * @description
   * # generate Report
   * get data for ip report
   */
    $scope.generateReport = function(){
 
      $scope.loadingState = true;
      
      //pad enddate to be inclusive of entire day up til midnight.
      $scope.end.setHours(23);
      $scope.end.setMinutes(59);
      $scope.end.setSeconds(59);

     //call api raw list
      mexService.get($scope.companyId,
                     $scope.start.toUTCString(),
                     $scope.end.toUTCString()).then(function(results){
      $scope.rowCollection = results;
      $scope.displayedCollection = results;//smartTableUtils.prepareArray(results);
      $scope.isViewingResults = true;
      $scope.loadingState = false;
      }, function(error){
       
       console.log('error calling mexService get() method: ' + error);
       $scope.isViewingResults = false;
       $scope.loadingState = false;
       });

     }

     
     
  /**
   * @ngdoc function
   * @name changeMode
   * @description
   * # changeMode()
   * while viewing report results, change the granular viewing mode. i.e. graph vs list
   */
    $scope.changeMode = function(mode){
      $scope.mode = mode;
    }

  /**
   * @ngdoc function
   * @name stopViewingResults
   * @description
   * # stopViewingResults
   * set application state back to search. Close results view
   */
     $scope.stopViewingResults = function(){
        $scope.isViewingResults = false;
     }
     
  /******************************************
    Angular UI Datepicker required functions
  *******************************************/
  /*$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
*/

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  });
