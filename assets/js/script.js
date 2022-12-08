
$(function () {
  var date = dayjs();
  var currentHour = dayjs().hour();
  var saveButton = $(".saveBtn")
  var hour = $(".time")

  $("#currentDay").text(date.format("dddd, MMMM DD | HH:mm:ss A"))
 
  hour.each(function () {
    var time = parseInt($(this).attr("id"))
    if (time < currentHour) {
      $(this).addClass("past")
    } else if (time === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    };
    
  });
  
  saveButton.on("click", function(){
    var buttonClick = $(this).parent().attr("id");
    var textInput = $(this).siblings(".description").val();
    console.log(buttonClick);

    localStorage.setItem(buttonClick, textInput);
  })
});
