
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


//Showing the date and time using Moment.js
var nowMoment = moment();
var nowMomentShown = document.getElementById("moment-date");
nowMomentShown.innerHTML = nowMoment.format('DD-MMM-YYYY kk:mm');


// Dynamically building the rows in a for loop with JS
for (let h=9; h<=17; h++){

    //Creating the row container
    const divRow = document.createElement("div");
    divRow.setAttribute("class", "div-row-dsk div-row-tab div-row-mob");
    dayPlanForm.appendChild(divRow);


    //Inside the row container, create the hour container
    const divHour = document.createElement("div");
    divHour.setAttribute("class", "div-hour-dsk div-hour-tab div-hour-mob");
    divHour.textContent = h;
    divRow.appendChild(divHour);

    //Inside the row container, create the input
    const divInput = document.createElement("input");
    divInput.setAttribute("class", "div-input-dsk div-input-tab div-input-mob");
    divRow.appendChild(divInput);

    //Inside the row container, create the save button
    const btnSave = document.createElement("button");
    btnSave.textContent = "SAVE";
    btnSave.setAttribute("class", "save-btn-dsk save-btn-tab save-btn-mob");
    divRow.appendChild(btnSave);
}