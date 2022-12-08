

$(function () {
  // Declare global variables
  var date = dayjs();
  var currentHour = dayjs().hour();
  var saveButton = $(".saveBtn")
  var hour = $(".time")

  // Adds the current date and time in the header
  $("#currentDay").text(date.format("dddd, MMMM DD | HH:mm:ss A"))
 
  // Iterate through each time class starting from index 0
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
  
  // Adds a click event to the save button that updates local storage
  saveButton.on("click", function(){
    var buttonClick = $(this).parent().attr("id");
    var textInput = $(this).siblings(".description").val();
    console.log(buttonClick);

    localStorage.setItem(buttonClick, textInput);
  })

});
