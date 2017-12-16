var expect = chai.expect;




describe('Main test', function(){


})

describe('Our grandmaTest', function () {
  beforeEach(function () {
    engine.reset();
  });

  it('should return 0 cookies at the beginning', function () {
    expect(engine.getCookieCounter()).to.be.eql(0);
  });

  it('should return 1 cookies after inc', function () {
    expect(engine.getCookieCounter()).to.be.eql(0);
    engine.incCookieCounter(1);
    expect(engine.getCookieCounter()).to.be.eql(1);
  });

  it('should return 0 grandmas at the beginning', function () {
    expect(engine.getGrandmaVol()).to.be.eql(0);
  });
  it('should return +1 gradma after buy one', function() {
    engine.incGrandmaVol(1);
    expect(engine.getGrandmaVol()).to.be.eql(1);
  });

});
