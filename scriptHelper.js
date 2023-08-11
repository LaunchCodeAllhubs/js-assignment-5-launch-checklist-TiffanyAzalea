// Write your helper functions here!
require('isomorphic-fetch');

//Div 1


//Div 2
const faultyItems = document.getElementById("faultyItems");
const launchStatus = document.getElementById("launchStatus");
const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
   const missionTarget = document.getElementById("missionTarget");

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) { 
   //my code here
   //should I use dot notation here? 
   //create variables?

    if (testInput === isNaN(value)) {
        return "Not a Number";
    }

    if (testInput === "") {
        return "Empty";
    }

    if (testInput === typeof Number) {
        return "Is a Number";
    }

//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.


//    if (pilot.value.trim() === "" || coPilot.value.trim() === "" || fuelLevel.value.trim() === "" || cargoMass.value.trim === "") {
//     window.alert("Please fill out each section.");
//     event.preventDefault();
//     //console.log(validateInput());
// }
//    if (pilot.value.trim() !== typeof String || coPilot.value.trim() !== typeof String) {
//     window.alert("Please enter letters only for Pilot and Co-Pilot.");
//     event.preventDefault();
//    }

//    if(fuelLevel.value.trim() === isNaN(value) || cargoMass.value.trim() === isNaN(value)) {
//     window.alert("Please enter only numbers for fuel level or cargo mass.")
//    }
// }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let fuel level = 0;
    // let cargo mass = 0

    //call validateinput function


    //validation here
   //pilot name string
   //if fuellevel and cargolevel is 1000...

   //does this go in formSubmission function? (update shuttle requirements)
       pilotStatus.innerHTML = `Pilot ${pilot name} is not ready`
       copilotStatus.innerHTML = `Co-Pilot ${copilot} is not ready`

       if (fuelLevel < 10000) {
        faultyItems.style.visibility = 'visible' // is this a funtion or varibable 
        
       }


// //json
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

// //json
function pickPlanet(planets) {

    //create random   math.random
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
