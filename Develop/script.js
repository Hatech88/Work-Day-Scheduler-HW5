//  declare the universal veriables 




// creation a function to save the text input in to the stoage and another function to pull the data

// render function

// storage function 


// Time function 

// Set data attributes to each hour input element so that the function below can assign a color to each row based on the current hour
$("#hour-9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#hour-10").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#hour-11").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#hour-12").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#hour-13").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#hour-14").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#hour-15").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#hour-16").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#4pm").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));




var time = moment();

// Function to set and enter text into the grid:
function setPlanner() {
    // Date function from moment.js:
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // To retrieve the schedule-field text from localStorage:
        $(".time-block").each(function () {
            var id = $(this).attr("id");
            var schedule = localStorage.getItem(id);
    
            if (schedule !== null) {
                $(this).children(".description").val(schedule);
            }
        });

    }
    setPlanner();
    // =================================================

    $('#9am .description').val(localStorage.getItem("9am"));








// study how to use moment 
// study how to use jQuery to create the planner 
// study how to create the storage function and save it
// study how to pull the data from the saved storage 


    // Saves to localStorage:
    // var saveBtn = $(".saveBtn");
        
    
    // saveBtn.on("click", function () {
    //     var time = $(this).parent().attr("id");
    //     var schedule = $(this).siblings(".description").val().trim();
        
    //     localStorage.setItem("time", JSON.stringify(time));
    //     localStorage.setItem("schedule", JSON.stringify(schedule));
    
    //     localStorage.getItem("time");
    //     localStorage.getItem("schedule");
    // });


// Local Storage 
    var saveBtn = $(".saveBtn")

    saveBtn.on("click", function() {
        console.log($(this).parent().attr("id"));

        // we want to get the time 
        var time = $(this).parent().attr("id");



        // we're trying to get the text content here . Stacking methods 
        console.log($(this).siblings(".description").val())
        var description = $(this).siblings(".description").val();

        // saving to local storage==== set item takes key and value 
        localStorage.setItem(time, description);

    })


        // to display the info on the screen when we open the page, use get item




    
    // Function for changing from past to present to future on the grid:
    function pastPresentFuture() {
        hour = time.hours();
        $(".time-block").each(function () {
            var thisHour = parseInt($(this).attr("data-time"));
    
            if (thisHour > hour) {
                $(this).addClass("future")
            }
            else if (thisHour === hour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("past");
                $(this).removeClass("future");
            }
        })
    }
    
    pastPresentFuture();