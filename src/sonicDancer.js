var makeSonicDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer sonic" src=src/assets/sonic.png></img>');
  this.$node.css('border', 'none');
  this.setPosition(top, left);
};

makeSonicDancer.prototype = Object.create(makeDancer.prototype);

makeSonicDancer.prototype.constructor = makeSonicDancer;

makeSonicDancer.prototype.step = function(){
  this.state = !this.state;
  setTimeout(this.step.bind(this), 700);
  this.animate(this.currentTop, (this.currentTop + 100), 'top');
};



