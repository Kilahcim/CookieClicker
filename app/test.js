var expect = chai.expect;


describe('App Test', function () {
  beforeEach(function () {
    engine.reset();
  });

  it('should return 0 cookies at the beginning', function () {
    expect(engine.getCookieCounter()).to.be.eql(0);
  });

  it('should return 1 cookies after click', function () {
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

  it('should increase grandma price after buy one', function() {
    engine.incGrandmaPrice(1.1);
    expect(engine.getGrandmaPrice()).to.be.eq(110);
  });

  it('should increase grandmas productiviti after buy one', function() {
    engine.incGrandmaPPS(1);
    expect(engine.getGrandmaPPS()).to.be.eq(1)
  });

  //  AS WE HAVE SEEN ON GRANDMA EXAMPLE ALL METHOD'S WORKS FINE.

});
