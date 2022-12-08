
$(function () {
  var date = dayjs();
  var currentHour = dayjs().hour();
  var currentHourP = parseInt(currentHour);
  var hour = $("#hour-")
  console.log(hour);
  $("#currentDay").text(date.format("YYYY MMMM DD | HH:mm:ss A"))
 
  for (var i = 9; i <= 17; i++) {
    if (currentHourP === hour) {
      hour.addClass(".present")
    } else if (currentHourP > hour) {
      hour.addClass(".future")
    } else {
      hour.addClass(".past")
    }
  }

  var saveButton = $(".saveBtn")
  saveButton.on("click", function(){
    var buttonClick = $(this).attr("id");
    var textInput;
  })
});
