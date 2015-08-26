$(document).ready(function(){
  window.dancers = [];
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event) {
    var height = $('body').height();
    window.dancers.forEach(function(dancer, index, arr) {
      var positionTop = (height / arr.length) * (index + 0.25);
      var positionLeft = 10;
      dancer.lineUp(positionTop, positionLeft);
    });
  });

  $(".pairUpButton").on("click", function(event) {
    for (var i = 0; i < dancers.length; i += 2) {
      var dancerA = dancers[i];
      var dancerB = dancers[i + 1];
      dancerA.partner = dancerB;
      dancerB.partner = dancerA;
      var pairTop = (dancerA.currentTop + dancerB.currentTop) / 2;
      var pairLeft = (dancerA.currentLeft + dancerB.currentLeft) / 2;
      dancerA.setPosition(pairTop, pairLeft - 30);
      dancerB.setPosition(pairTop, pairLeft + 30);
    }
  });
  $(".clearButton").on("click", function(event) {
    dancers.forEach(function(element) { element.$node.remove(); });
    dancers = [];
  });
  $(".backButton").on("click", function(event) {
    dancers.forEach(function(element) {
      element.setPosition(element.oldTop, element.oldLeft);
    });
  });


});