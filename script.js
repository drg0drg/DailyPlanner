
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













// ----------------- Variables------------------
//----------------------------------------------
var dayPlanForm = document.getElementById("day-plan-form");
var plannerContainerEl = document.getElementById("planner-container");
var btnSaveEl = document.querySelector("button");


//The following is needed for the coloring loop, depending on hour
//<currentHour> takes the hour only from the moment library. It outputs a string
currentHour = moment().format("kk");
console.log("current time (hour only) is  " + currentHour);
var inputArray = [];
var inputArrayIndex;
var storedInput;



storedInput = JSON.parse(localStorage.getItem("storedInput"));




//----------------MomentJS----------------------
//----------------------------------------------

//Showing the date and time using Moment.js
var nowMoment = moment();
//in JS:
// var nowMomentShown = document.getElementById("moment-date");

//in jQuery:
var nowMomentShown = $("#moment-date")[0];
nowMomentShown.innerHTML = nowMoment.format('DD-MMM-YYYY kk:mm');





// Dynamically building the rows in a <for loop> with JS
function loadSomething(){
for (let h=9; h<=17; h++){

    inputArrayIndex = h-9; 



    //Creating the row container
    const divRow = document.createElement("div");
    divRow.setAttribute("class", "div-row-dsk div-row-tab div-row-mob");
    divRow.setAttribute("h-Index", h);
    plannerContainerEl.appendChild(divRow);




    //Inside the row container, create the hour container
    const divHour = document.createElement("div");
    divHour.setAttribute("class", "div-hour-dsk div-hour-tab div-hour-mob");
    divHour.textContent = h;
    divRow.appendChild(divHour);
    
    
    
    
    //Inside the row container, create the input
    const divInput = document.createElement("input");
    divInput.setAttribute("class", "div-input div-input-dsk div-input-tab div-input-mob");
    // divInput.setAttribute("")
    var task = localStorage.getItem(h);
    divInput.textContent = task;
    divRow.appendChild(divInput);
    console.log(task);
    //---------------------------
    



    //Inside the row container, create the save button
    const btnSave = document.createElement("button");
    btnSave.textContent = "SAVE";
    btnSave.setAttribute("class", "save-btn-dsk save-btn-tab save-btn-mob");
    btnSave.setAttribute("id", "btn-save");
    divRow.appendChild(btnSave);



    rowColorCode (divInput, h);




    if (task !== null) {
        // inputArray[inputArrayIndex] = storedInput[inputArrayIndex];
        // console.log(storedInput)//doesn't log anything
        // console.log(inputArray) //doesn't log anything
        divInput.textContent = task;
    
      } else {
        inputArray = new Array(9);
      }





    dayPlanForm.addEventListener("submit", function(e){
        e.preventDefault();

    })




    btnSave.addEventListener("click", function(e){
        e.preventDefault();
        var userInput = divInput.value;
        localStorage.setItem(h, (userInput));
    
        // storedInput = inputArray[inputArrayIndex];
        // inputArray[inputArrayIndex]=localStorage.getItem(h, (userInput));
        loadSomething();
    })

}//end of for loop
}//end of loadSomething function



loadSomething();








function rowColorCode (divInput, h) {
    if (currentHour > h) {
        divInput.style.backgroundColor = "rgb(240, 150, 150, 0.700)";
        // console.log(typeof(currentHour));
        // console.log(typeof(h));
    } else if (currentHour < h){
        divInput.style.backgroundColor = "rgb(158, 245, 158, 0.700)";
    } else {
        divInput.style.backgroundColor = "rgb(173, 173, 173, 0.700)";
    }

}






































