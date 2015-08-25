// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.state = true;
  this.partner = null;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
 // return dancer;
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
   this.state = !this.state;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
   // "-webkit-transition": "top 2s, left 2s, -webkit-transform 2s",
   //  transition: "top 2s, left 2s, transform 2s"
  };
  this.currentTop = top;
  this.currentLeft = left;
  this.$node.css(styleSettings);
  setTimeout(function() {
    this.$node.css({
      "-webkit-transition": "-webkit-transform 2s",
      transition: "transform 2s"
    }).call(this);
  }, 1000);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};

makeDancer.prototype.animate = function(start, end) {
  console.log('called');
  var argsArray = Array.prototype.slice.call(arguments, 2);
  var startProperties = {};
  var endProperties = {};
  argsArray.forEach(function(item) {
    startProperties[item] = start;
    endProperties[item] = end;
  });

  if (this.state) {
    this.$node.animate(startProperties, this.timeBetweenSteps);
  } else {
    this.$node.animate(endProperties, this.timeBetweenSteps);
  }
};