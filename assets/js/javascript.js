// display current date under header
var currentDate = moment().format("dddd" + ", " + "MMMM Do YYYY");
$("#currentDay").text(currentDate);

// check if timeblocks are past, present or future
function timeChecker() {
    var currentTime = moment().hour();

    $(".time-block").each(function() {
    
        var schedTime = parseInt($(this).attr("id"));

        // // check if time is past
        if (schedTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else if (schedTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

// save entered text into localstorage


// run timechecker function
timeChecker();