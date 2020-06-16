$(document).ready(function () {
  var present = moment();

  function presentTime() {
    $("#currentDay").text(present.format("dddd, MMMM, Do"));
  }
  presentTime();

  for (i = 0; i < 9; i++) {
    var storedItem = localStorage.getItem(`event${i}`);
    if (storedItem) {
      var id = $(`#input${i}`);
      
      $(id).val(storedItem);
    }
  }

  function timeColor() {
    
    for (i = 0; i < 9; i++) {
        var hour = $(".hour");
        var hourId = $(hour[i]).attr("id"); 
        var currentHour = present.format("k");
      if (hourId  < currentHour) {
        $("#input"+i).addClass("past");
      }
      else if (hourId  == currentHour) {
        $("#input"+i).addClass("present");
      }
      else if (hourId > currentHour) {
        $("#input"+i).addClass("future");
      }
    }   
  }
  timeColor();




  //select all buttons under class
  $(".saveBtn").on("click", function () {

    // we want to get the ID for the button. "this" refers to the button, and we are asking for its ID as we click.
    var buttonId = $(this).attr("id");
    var event = `#input${buttonId}`;
    localStorage.setItem(`event${buttonId}`, $(event).val());

  });

});
