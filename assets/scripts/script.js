$(document).ready(function () {

function presentTime(){
    var present = moment();
$("#currentDay").text(present.format("dddd, MMMM, Do"));
}
presentTime();
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"];

function timeSlot (){
    for (i=0 ; i <= times.length -1; i++){   
           
        $(".container").append("<div class= 'row'>");
        
    }
}
timeSlot();

$(".row").append("<div class= 'col-1 time-block hour'>");
$(".row").append("<input class= 'col-10 eventInput textarea''>");
$(".row").append("<div class= 'col-1 display-icon saveBtn btn fas fa-lock'>");


var hour = $("hour");
hour.attr("data-letter", times[i]);
hour.text(times[i]);





//moment("12:00").isSame("12:01")
//moment("12:00").isBefore("12:01")

});