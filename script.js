// Write your JavaScript code here!

window.addEventListener("load", function() {

const pilot = document.querySelector('input[name=pilotName]').value;
const coPilot = document.querySelector('input[name=copilotName]').value;
const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
const cargoMass = document.querySelector('input[name-cargoMass]').value;


//call formsubmission
//inside of an event listener
//define variuab le or form
//
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       
       
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //My added code TH
  //  const testForm = document.getElementById("testForm");
	//testForm.addEventListener("submit", //add a function here. what happens after it submits);
   
    // work for input file
    //.document object (.queryselector)
    })
   

    //add validation in here???    
});

//DOM code here TH

// do I add event listeners for the buttons



//co pilot.innerHTML = `tempate literal.....etc 

//event listner for the updates???


//TH 3 if statements
// if (fuel level is too < 10000 lits) {
//     change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey
    
//     fuelSattus.innerHTML = now equals....

//     also update launchStatus"Shuttle not ready for launch" and the color should change to red.

// }

// if (cargo mass is > 10000 kilograms) {
//     change list to visible with....
//     launchStatus changes to...and color changes to...
// }

// if (shuttle is ready to launch) {
//     change launchStatus colorto...
//     and display this 'string'..
// }


//creat variables/reference div faultyItems, h2 launchStatus
