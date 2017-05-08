// constructor template
function Place(name,location,landmarks,date-visited) {
  this.placeName = name;
  this.placeLocation = location;
  this.landmark = landmarks;
  this.dateVisited = date-visited;
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    //collects input
    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedDate = $("input#new-date").val();

    // call the constructor
    var newLocation = new Place(inputtedName,inputtedLocation,inputtedLandmark,inputtedDate)
  });
});
