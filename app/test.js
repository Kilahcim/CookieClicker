var expect = chai.expect;

var grandmaTest = testFactory([{ name: 'grandma', cost: 100, productivity: 8 }]);
var farmTest = testFactory([{name: 'farm', cost: 1100, productivity: 47}]);

describe('Main test', function(){


})

describe('Our grandmaTest', function () {
  beforeEach(function () {
    grandmaTest.__reset();
  });

  it('should return 0 cookies at the beginning', function () {
    expect(grandmaTest.getCookieCounter()).to.be.eql(0);
  });

  it('should return 1 cookies after click', function () {
    expect(grandmaTest.getCookieCounter()).to.be.eql(0);
    grandmaTest.click();
    expect(grandmaTest.getCookieCounter()).to.be.eql(1);
  });

  it('should return 0 grandmas at the beginning', function () {
    expect(grandmaTest.getVolume("grandma")).to.be.eql(0);
  });
});
