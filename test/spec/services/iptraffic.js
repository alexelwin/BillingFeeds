'use strict';

describe('Service: ipTraffic', function () {

  // load the service's module
  beforeEach(module('mitbillingFeedangularJsApp'));

  // instantiate service
  var ipTraffic;
  beforeEach(inject(function (_ipTraffic_) {
    ipTraffic = _ipTraffic_;
  }));

  it('should do something', function () {
    expect(!!ipTraffic).toBe(true);
  });

});
