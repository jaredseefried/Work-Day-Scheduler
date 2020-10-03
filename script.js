$(document).ready(function(){

// Global Variables
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var officeHours = ["8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "01:00 p.m.", "02:00 p.m.", "03:00 p.m.", "04:00 p.m.", "05:00 p.m.",] 

$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"))

function updateHour(){
    var currentTime = dayjs().format("H");

    if (currentTime === hours[i]){
        $(".hour" + hours[i]).addClass("present");
    }
    
}

//Loop through the available office hours

for (i=0; i < hours.length; i++ ){
    //Create a new Div for the time block element
    var newDiv = $("<div>");
    newDiv.addClass("row time-block")
        .attr('id', "hour" + hours[i])
        .attr("value", hours[i]);
    $(".container").append(newDiv);
        
    //Available office hours column
    var timeCol = $("<div>");
    timeCol.addClass("hour col-2").text(officeHours[i]);
    newDiv.append(timeCol);
        
    //Description Column
    var description = $("<textarea>");
    description.addClass("description col-9");
    newDiv.append(description);
    updateHour();
        
    //The save button
    var savebtn = $("<button>");
    savebtn.addClass("saveBtn col-1");
    savebtn.text("Save");
    newDiv.append(savebtn);
}

 
});
