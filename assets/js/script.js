
$(function () {
  var date = dayjs();
  var currentHour = dayjs().hour();
  $("#currentDay").text(date.format("dddd, MMMM DD | HH:mm:ss A"))
  var hour = $(".time")
 
  hour.each(function () {
    var time = parseInt($(this).attr("id"))
    if (time < currentHour) {
      $(this).addClass("past")
    } else if (time === currentHour) {

    } else {

    }
    
  })
  
  
  // for (var i = 9; i <= 17; i++) {
  //   if (currentHourP == hour) {
  //     hour.addClass(".present")
  //   } else if (currentHourP > hour) {
  //     hour.addClass(".future")
  //   } else {
  //     hour.addClass(".past")
  //   }
  // }

  var saveButton = $(".saveBtn")
  saveButton.on("click", function(){
    var buttonClick = $(this).attr("id");
    var textInput;
  })
});
