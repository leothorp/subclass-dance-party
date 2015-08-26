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

  var time = (this instanceof makeSonicDancer) ? 1.5 : this.timeBetweenSteps / 1000;
  var styleSettings = {
    top: top,
    left: left,
   "-webkit-transition": "top "+time+"s, left "+time+"s, -webkit-transform "+time+"s, border-width "+time+"s, border-radius "+time+"s, border-color "+time+"s",
    transition: "top "+time+"s, left "+time+"s, transform "+time+"s, border-width "+time+"s, border-radius "+time+"s, border-color "+time+"s"
  };
  this.oldTop = this.currentTop || null;
  this.oldLeft = this.currentLeft || null;
  this.currentTop = top;
  this.currentLeft = left;
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};

makeDancer.prototype.animate = function(start, end) {
  var argsArray = Array.prototype.slice.call(arguments, 2);
  var startProperties = {};
  var endProperties = {};
  argsArray.forEach(function(item) {
    startProperties[item] = start;
    endProperties[item] = end;
  });

  if (this.state) {
    this.$node.css(startProperties);
  } else {
    this.$node.css(endProperties);
  }
};