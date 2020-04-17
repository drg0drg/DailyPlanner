
/* ------------------------------------------------------*/
/* ---------------Daily Planner Pseudocode ------------- */
/* ------------------------------------------------------*/

//Implement MomentJS with formatting for date and time
//Dynamically create the rows in JS
    //Need a for loop for working hours between 9 and 17
    //Inside this for loop, create each element, the entire row, the hour section, the input section and the save button
    //For this purpose, use a succession of document.createElement, , setAttribute and appendChild
//Create addEventListener for the save button
//Inside the Listener, use local storage to save user's input





var dayPlanForm = document.getElementById("day-plan-form")
var plannerContainerEl = document.getElementById("planner-container")


//Showing the date and time using Moment.js
var nowMoment = moment();
//in JS:
// var nowMomentShown = document.getElementById("moment-date");

//in jQuery:
var nowMomentShown = $("#moment-date")[0];
nowMomentShown.innerHTML = nowMoment.format('DD-MMM-YYYY kk:mm');



//The following is needed for the coloring loop, depending on hour
//<currentHour> takes the hour only from the moment library. It outputs a string
currentHour = moment().format("kk");
console.log(currentHour);




// Dynamically building the rows in a for loop with JS
for (let h=16; h<=22; h++){

    //Creating the row container
    const divRow = document.createElement("div");
    divRow.setAttribute("class", "div-row-dsk div-row-tab div-row-mob");
    plannerContainerEl.appendChild(divRow);


    //Inside the row container, create the hour container
    const divHour = document.createElement("div");
    divHour.setAttribute("class", "div-hour-dsk div-hour-tab div-hour-mob");
    divHour.textContent = h;
    divRow.appendChild(divHour);

    //Inside the row container, create the input
    const divInput = document.createElement("input");
    divInput.setAttribute("class", "div-input div-input-dsk div-input-tab div-input-mob");
    divRow.appendChild(divInput);

    //Inside the row container, create the save button
    const btnSave = document.createElement("button");
    btnSave.textContent = "SAVE";
    btnSave.setAttribute("class", "save-btn-dsk save-btn-tab save-btn-mob");
    divRow.appendChild(btnSave);



    //color coding function of hour
    if (currentHour > h) {
        divInput.style.backgroundColor = "rgb(240, 150, 150)";
        console.log(typeof(currentHour));
        console.log(typeof(h));
    } else if (currentHour < h){
        divInput.style.backgroundColor = "rgb(158, 245, 158)";
    }else {
        divInput.style.backgroundColor = "rgb(173, 173, 173)";
    }



    
    
    //Event Listener for save button
    btnSave.addEventListener("click", function(){
        var userInput = divInput.value;
        localStorage.setItem(userInput);
    })
}
