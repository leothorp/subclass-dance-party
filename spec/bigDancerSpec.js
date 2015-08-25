describe("bigDancer", function() {

  var bigDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bigDancer = new makeBigDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bigDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it grow", function() {
    sinon.spy(bigDancer, 'animate');
    bigDancer.step();
    console.log(bigDancer.animate);
    expect(bigDancer.animate.callCount).to.be.equal(1);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bigDancer, "step");
      expect(bigDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bigDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bigDancer.step.callCount).to.be.equal(2);
    });
  });
});

