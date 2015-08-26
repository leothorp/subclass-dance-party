var makeBigDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-color', 'blue');
};
makeBigDancer.prototype = Object.create(makeDancer.prototype);

makeBigDancer.prototype.constructor = makeBigDancer;

makeBigDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.animate(10, 30, 'borderTopLeftRadius', 'borderTopRightRadius',
    'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderWidth');
};







