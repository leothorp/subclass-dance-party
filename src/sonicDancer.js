var makeSonicDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.state = true;
  this.$node = $('<img class="dancer sonic" src=src/assets/sonic.png></img>');
  this.$node.css('border', 'none');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
makeSonicDancer.prototype = Object.create(makeDancer.prototype);
makeSonicDancer.prototype.constructor = makeSonicDancer;
makeSonicDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.animate(this.currentTop, (this.currentTop + 50), 'top');

};



