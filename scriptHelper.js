// Write your helper functions here!
require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    // Here is the HTML formatting for our mission target div.
//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

function validateInput(testInput) { //is testInput the event?
   //my code here
   if ((variable here).value.trim() === "") {
    window.alert("Oops! You didn't enter anything.");
    event.preventDefault();
}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //validation here
   //validation for fuel level (is it a number)
   //pilot name string
   //if fuellevel and cargolevel is 1000...
}

// //json
// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// //json
// function pickPlanet(planets) {

//     //create random   math.random
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
