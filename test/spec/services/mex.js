'use strict';

describe('Service: mex', function () {

  // load the service's module
  beforeEach(module('mitbillingFeedangularJsApp'));

  // instantiate service
  var mex;
  beforeEach(inject(function (_mex_) {
    mex = _mex_;
  }));

  it('should do something', function () {
    expect(!!mex).toBe(true);
  });

});
