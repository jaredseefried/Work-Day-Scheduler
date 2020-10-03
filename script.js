$(document).ready(function(){

// Global Variables
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var officeHours = ["8:00 a.m.", "9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 a.m.", "01:00 p.m.", "02:00 p.m.", "03:00 p.m.", "04:00 p.m.", "05:00 p.m.",] 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
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
        
          //The save button
          var savebtn = $("<button>");
          savebtn.addClass("saveBtn col-1");
          savebtn.text("Save");
          newDiv.append(savebtn);
    }
    
function updateHour(){
    var currentTime = dayjs().format()
    divTime = $(".time-block").val()
              
    $(".time-block").each(function(){
            
        if (divTime < currentTime){
            $(this).addClass("past")
            } 
            if (divTime == currentTime){
            $(this).addClass("present")
            } 
            if (divTime > currentTime){
            $(this).addClass("future")
            }
     })
}

    updateHour();
            
});

// $(document).ready(function () {

//     //Declare variables
//     var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
//     var displayHour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    
//     //Loop through creating each hour on the scheduler
//     for (i=0; i < hour.length; i++ ){
//       //Create a new Div for the time block element
//       var newDiv = $("<div>");
//       newDiv
//         .addClass("row time-block")
//         .attr('id', "hour" + hour[i])
//         .attr("value", hour[i])
//       $(".container").append(newDiv)
    
//       //Create a new 1 col div for time
//       var timeCol = $("<div>");
//       timeCol
//         .addClass("hour col-1")
//         .text(displayHour[i])
//       newDiv.append(timeCol)
    
//       //Create a new 10 col div for description
//       var descriptionCol = $("<div>")
//       descriptionCol.addClass("description col-10")
//       newDiv.append(descriptionCol)
    
//       //Create a new 1 col div for save button
//       var saveCol = $("<div>")
//       saveCol.addClass("saveBtn col-1")
//       newDiv.append(saveCol)
//     }
    
//     function updateHour(){
//       var currentTime = moment().hours()
//       divTime = $(".time-block").val()
      
//       $(".time-block").each(function(){
    
//         if (divTime < currentTime){
//           $(this).addClass("past")
//         } if (divTime == currentTime){
//           $(this).addClass("present")
//         } if (divTime > currentTime){
//           $(this).addClass("future")
//         }
    
//       })
//     }
    
//     updateHour();
    
//     })