var makeBigDancer = function(top, left, timeBetweenSteps){
 // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css('border-color', 'blue');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;

};
makeBigDancer.prototype = Object.create(makeDancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer;
makeBigDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.animateBorderRadius(10, 30);
  // this.animateBorderWidth(10, 30);
  this.animate(10, 30, 'borderTopLeftRadius', 'borderTopRightRadius',
    'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderWidth');

};







