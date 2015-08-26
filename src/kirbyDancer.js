var makeKirbyDancer = function(top, left, timeBetweenSteps){
  makeBigDancer.call(this, top, left, timeBetweenSteps);
  this.size = 100 * Math.random() + 100;
  this.$node.css({
    'border': 'none',
    'height': this.size,
    'width': this.size,
    'background-image': 'url("src/assets/kirby.png")',
    'background-size': "100%"
  });
  this.grow = true;
};
makeKirbyDancer.prototype = Object.create(makeBigDancer.prototype);

makeKirbyDancer.prototype.constructor = makeKirbyDancer;

makeKirbyDancer.prototype.step = function(){
  this.state = !this.state;

  setTimeout(this.step.bind(this), 600);
  this.grow ? this.size += 25 : this.size -= 25;
  if (this.size <= 200) {
    this.grow = true;
  } else if (this.size >= 350) {
    this.grow = false;
  }
  this.animate(this.size, this.size, 'height', 'width');
  this.animate('url("src/assets/kirby.png")', 'url("src/assets/kirby2.png")', 'background-image');
};







