// Start document
$(document).ready(function(){

// Global Variables
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Index of hours array starts at 0
var i = 0;

//Available offices hours to display
var officeHours = ["8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "01:00 p.m.", "02:00 p.m.", "03:00 p.m.", "04:00 p.m.", "05:00 p.m.",] 

//Array of events that have data in the text area
scheduledEvents = {
    hour8: "",
    hour9: "",
    hour10: "",
    hour11: "",
    hour12: "",
    hour13: "",
    hour14: "",
    hour15: "",
    hour16: "",
    hour17: "",
};

//Get Local Storage Data
var storage = localStorage.getItem("events"); // Define variable for getItems
    if (storage !== null){ // If Storage does NOT equal null
    scheduledEvents = JSON.parse(storage); //Them parse the data
    }
    
// Add the current day to the currentDay element on the DOM
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

// Update the time block colors to reflect past, present, and future times. 
function updateTime(){
    var currentTime = dayjs().format("H"); // define format of time with dayjs
        if (currentTime == hours[i]){ // If the current time equal the hour number block
            $("#hour" + hours[i]).addClass("present"); // Then add class of present
        } else if (currentTime > hours[i]){ // if the current time is greater than the hour number block
            $("#hour" + hours[i]).addClass("past"); // Then add the class of past
        } else if (currentTime < hours[i]){ // If the current time is less than the hours numb block
            $("#hour" + hours[i]).addClass("future");// Then add class of future
        }
}

//Loop through the available office hours and create the elements to show in the browser.
for (i=0; i < hours.length; i++ ){
    var newDiv = $("<div>"); // Create a new Div for the time block element
        newDiv.addClass("row time-block") // Add class
            .attr('id', "hour" + hours[i]) // Add ID
            .attr("value", hours[i]); // Add Value
        $(".container").append(newDiv); // Append Container Div with new Div
    updateTime(); // Update the colors of each timeblock function
        
    //Available office hours column
    var timeCol = $("<div>"); // Define Div
        timeCol.addClass("hour col-2").text(officeHours[i]); // Add class
        newDiv.append(timeCol); // Append Div with new time column
        
    //Description Column
    var description = $("<textarea>"); // Define new Textarea element
        description.addClass("col-8 description"); // Add Class
        description.attr("id", "description"+hours[i]); // Add ID
        description.attr("placeholder", "Enter a scheduling item for this time slot.") // Add placeholder
        newDiv.append(description); // Append new textarea to newDiv created
        
    
    //The save button
    var savebtn = $("<button>");
        savebtn.addClass("saveBtn col-2"); // Add class
        savebtn.attr("id", "savebtn"+hours[i]);// Add ID
        savebtn.text("Save");// Add Text on button
        newDiv.append(savebtn);// Add newly created button in parent Div
            
            $("#savebtn"+hours[i]).click(function(){// Add an event Listener of onclick to button
            var userData = $(this).siblings(".description").val();// Define the values of each description 
            key = $(this).parent().attr("id");// Get description
            scheduledEvents[key] = userData;
            saveToLocalStorage();// Save to local storage function call
            });
        
        var hoursName = "hour"+hours[i];// Define a name for each hour
        if(scheduledEvents[hoursName]){// If scheduledEvents array has data
            description.text(scheduledEvents[hoursName])
        }
    }

    function saveToLocalStorage(){// Save to Local Storage function
        localStorage.setItem("events", JSON.stringify(scheduledEvents));// Set items in array to local storage
    }

});
// End Document



