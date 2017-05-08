// constructor template
function Place(name,location,landmarks,dateVisited,recommend) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeLandmark = landmarks;
  this.placeDateVisited = dateVisited;
  this.placeRecommend = recommend;
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    //collects input
    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedRecommendation = $("input:radio[name=radio]:checked").val();

    // call the constructor
    var newPlace = new Place(inputtedName,inputtedLocation,inputtedLandmark,inputtedDate, inputtedRecommendation);

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
      $(".place-recomendation").text(newPlace.placeRecommend);
    });

    // Clears the data held in the listed values
    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-date").val("");


  });
});
