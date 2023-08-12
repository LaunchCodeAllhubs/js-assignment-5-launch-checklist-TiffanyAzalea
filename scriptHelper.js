// Write your helper functions here!
require('isomorphic-fetch');

const missionTarget = document.getElementById("missionTarget"); 



//Div 2


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
        missionTarget.innerHTML += `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
            `
   */
}

function validateInput(testInput) { 
   
    
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}
        

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { //list of faultyItems
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    //could I make an array of the parameters and then loop through the parameters
            // let parameters = [document, list, pilot, copilot, fuelLevel, cargoLevel];
            // for (let i = 0; i < parameter.length; i++);
                //if(validateInput(i)){
                    //window.alert()
                //}

    //call validateinput function

    if (validateInput(list) === "Empty" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("Please fill out each section.");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter only numbers for fuel level and cargo mass.");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter letters only for Pilot and Co-Pilot.");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`;
        list.style.visibility = 'visible'; // is this a funtion or varibable  //its a css style
     
        if (fuelLevel < 10000 && cargoLevel >10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
             fuelStatus.innerHTML = "Fuel level too low for launch";
             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
             launchStatus.style.color = "red";//color change to red
        }else if (cargoLevel > 10000 && fuelLevel >10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            fuelStatus.innerHTML = "Fuel is ok"//check
             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
             launchStatus.style.color = rgb(199, 37, 78);
         //else if both fail 
        }else if (fuelLevel < 10000 && cargoLevel < 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"; //check
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";//color change to red

        }else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
             launchStatus.style.color = rgb(65, 159, 106);
             cargoStatus.innerHTML = "Cargo mass low enough for launch"; //check
            fuelStatus.innerHTML = "Fuel level high enough for launch"; //check
     } 
     
    
         
        

    }
    


    //validation here
   //pilot name string


   //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.


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
}


// //json
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

// //json
function pickPlanet(planets) {

    //create randomization   math.random
    
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
