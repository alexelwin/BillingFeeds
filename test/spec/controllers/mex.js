'use strict';

describe('Controller: MexctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('mitbillingFeedangularJsApp'));

  var MexctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MexctrlCtrl = $controller('MexctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MexctrlCtrl.awesomeThings.length).toBe(3);
  });
});
