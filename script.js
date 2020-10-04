$(document).ready(function(){

// Global Variables
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var i = 0;

var officeHours = ["8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "01:00 p.m.", "02:00 p.m.", "03:00 p.m.", "04:00 p.m.", "05:00 p.m.",] 

scheduledEvents = {};



$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"))

function updateTime(){
    var currentTime = dayjs().format("H");
        if (currentTime == hours[i]){
            $("#hour" + hours[i]).addClass("present");
        } else if (currentTime > hours[i]){
            $("#hour" + hours[i]).addClass("past");
        } else if (currentTime < hours[i]){
            $("#hour" + hours[i]).addClass("future");
        }
}

//Loop through the available office hours and create the elements to show in the browser.
for (i=0; i < hours.length; i++ ){

    //Create a new Div for the time block element
    var newDiv = $("<div>");
        newDiv.addClass("row time-block")
            .attr('id', "hour" + hours[i])
            .attr("value", hours[i]);
        $(".container").append(newDiv);
    updateTime();
        
    //Available office hours column
    var timeCol = $("<div>");
        timeCol.addClass("hour col-2").text(officeHours[i]);
        newDiv.append(timeCol);
        
    //Description Column
    var description = $("<textarea>");
        description.addClass("col-8 description");
        description.attr("id", "description"+hours[i]);
        description.attr("placeholder", "Enter a scheduling item for this time slot.")
        newDiv.append(description);
        
    
    //The save button
    var savebtn = $("<button>");
        savebtn.addClass("saveBtn col-2");
        savebtn.attr("id", "savebtn"+hours[i])
        savebtn.text("Save");
        newDiv.append(savebtn);
        $("#savebtn"+hours[i]).click(function(){
        var userData = $(this).siblings(".description").val();
        key = $(this).parent().attr("id");
        scheduledEvents[key] = userData;
        saveToLocalStorage();
        var storage = localStorage.getItem(scheduledEvents);
            if (storage !== null){
            scheduledEvents = JSON.parse(storage);
            }
        });
       
    }

    function saveToLocalStorage(){
    localStorage.setItem("events", JSON.stringify(scheduledEvents));
    }

    

});



