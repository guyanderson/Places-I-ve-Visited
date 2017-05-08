// constructor template
function Place(name,location,landmarks,dateVisited) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeLandmark = landmarks;
  this.placeDateVisited = dateVisited;
};
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    //collects input
    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedDate = $("input#new-date").val();
    console.log(inputtedName, inputtedLocation, inputtedLandmark, inputtedDate);

    // call the constructor
    var newPlace = new Place(inputtedName,inputtedLocation,inputtedLandmark,inputtedDate);
      // append li, span, .place, and placeName
    $("ul#place").append("<li><span class = 'place'>" + newPlace.placeName + "</span></li>");
    $(".place").last().click(function() {
      // attach properties to the corresponding classes
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".place-location").text(newPlace.placeLocation);
      $(".place-landmarks").text(newPlace.placeLandmark);
      $(".place-date-visited").text(newPlace.placeDateVisited);
    });

  });
});
