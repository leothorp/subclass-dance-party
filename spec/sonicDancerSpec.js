describe("sonicDancer", function() {

  var sonicDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sonicDancer = new makeSonicDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(sonicDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its animate a bounce", function() {
    sinon.spy(sonicDancer, 'animate');
    sonicDancer.step();
    expect(sonicDancer.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step every 700ms (masking parent step)", function(){
      sinon.spy(sonicDancer, "step");
      expect(sonicDancer.step.callCount).to.be.equal(0);
      clock.tick(700); // ? it seems an extra tick is necessary...
      clock.tick(700);

      expect(sonicDancer.step.callCount).to.be.equal(1);

      clock.tick(700);
      expect(sonicDancer.step.callCount).to.be.equal(2);
    });
  });
});

// browser.actions().mouseMove($('bigDancer.$node').find()).perform()
