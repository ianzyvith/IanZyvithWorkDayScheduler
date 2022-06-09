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
$("button").click(function() {
    var saveId = $(this).parent().attr("id");
    var saveDesc = $(this).siblings(".description").val();

    localStorage.setItem(saveId, saveDesc);

    alert("Schedule has been saved");
})

// pull from localstorage

$("#9 .description").text(localStorage.getItem("9"));
$("#10 .description").text(localStorage.getItem("10"));
$("#11 .description").text(localStorage.getItem("11"));
$("#12 .description").text(localStorage.getItem("12"));
$("#13 .description").text(localStorage.getItem("13"));
$("#14 .description").text(localStorage.getItem("14"));
$("#15 .description").text(localStorage.getItem("15"));
$("#16 .description").text(localStorage.getItem("16"));
$("#17 .description").text(localStorage.getItem("17"));

// run timechecker function
timeChecker();