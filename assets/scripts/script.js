$(document).ready(function () {
  var present = moment();

  function presentTime() {
    $("#currentDay").text(present.format("dddd, MMMM, Do"));
  }
  presentTime();

  for (i = 0; i < 9; i++) {
    var storedItem = localStorage.getItem(`event${i}`);
    if (storedItem) {
      console.log(storedItem);
      console.log(`input${i}`);
      var id = $(`#input${i}`);
      console.log(id);
      $(id).val(storedItem);
    }
  }

  function timeColor() {
    for (i = 0; i < 9; i++) {
        var hour = $(".hour");
        console.log($(".row"));
        var hourId = $(hour[i]).attr("id");
        var currentHour = present.format("k");
        console.log(hourId);
        console.log(currentHour);
      if (hourId < currentHour) {
        $("input").addClass("past");
      }
      else if (hourId === currentHour) {
        $("input").addClass("present");
      }
      else if (hourId < currentHour) {
        $("input").addClass("future");
      }
    }   
  }
  timeColor();




  //select all buttons under class
  $(".saveBtn").on("click", function () {

    // we want to get the ID for the button. "this" refers to the button, and we are asking for its ID as we click.
    var buttonId = $(this).attr("id");
    console.log(buttonId);

    var event = `#input${buttonId}`;
    console.log(event);
    console.log($(event).val());
    localStorage.setItem(`event${buttonId}`, $(event).val());
    console.log(`event${buttonId}`, $(event).val());
  });

});
