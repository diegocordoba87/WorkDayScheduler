$(document).ready(function () {
    var present = moment();
    function presentTime(){
        
    $("#currentDay").text(present.format("dddd, MMMM, Do"));
    }
    presentTime();

for(i =0; i < 9;i++){
    var storedItem = localStorage.getItem(`event${i}`);
    if(storedItem){
    console.log(storedItem);
    console.log(`input${i}`)
    var id = $(`#input${i}`)
    console.log(id);
    $(id).val(storedItem);
    }
    

}

    //select all buttons under class
$(".saveBtn").on("click", function(){
    console.log("clicking");

    // we want to get the ID for the button. "this" refers to the button, and we are asking for its ID as we click.
    var buttonId = ($(this).attr("id"));
    console.log(buttonId);

    var event = `#input${buttonId}`;
    console.log(event);
    console.log($(event).val());
    localStorage.setItem(`event${buttonId}`,$(event).val());
    console.log(`event${buttonId}`,$(event).val());
})





    
   
//moment("12:00").isSame("12:01")
//moment("12:00").isBefore("12:01")

});