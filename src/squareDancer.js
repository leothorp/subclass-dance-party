var makeSquareDancer = function(top, left, timeBetweenSteps){
  makeBigDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-color', 'orange');
};

makeSquareDancer.prototype = Object.create(makeBigDancer.prototype);

makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var max = Math.floor(Math.random() * 125);
  var min = Math.floor(Math.random() * 25);
  this.animateBorderRadius(max, 0);
  this.animateBorderWidth(min, max);
  this.animate('orange', 'black', 'border-color');
};

makeBigDancer.prototype.animateBorderRadius = function(start, end) {
  this.animate(start, end, 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius');
};

makeBigDancer.prototype.animateBorderWidth = function(start, end) {
  this.animate(start, end, 'borderWidth');
};
