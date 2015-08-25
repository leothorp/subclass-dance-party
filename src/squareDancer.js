var makeSquareDancer = function(top, left, timeBetweenSteps){
 // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeBigDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css('border-color', 'yellow');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;

};
makeSquareDancer.prototype = Object.create(makeBigDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
makeSquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.animateBorderRadius(0, 30);

  this.animateBorderWidth(10, 30);

};

makeBigDancer.prototype.animateBorderRadius = function(start, end) {
  this.animate(start, end, 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius');
};

makeBigDancer.prototype.animateBorderWidth = function(start, end) {
  this.animate(start, end, 'borderWidth');
};