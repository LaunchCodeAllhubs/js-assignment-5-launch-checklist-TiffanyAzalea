// Write your JavaScript code here!



window.addEventListener("load", function() {
    const launchForm = document.querySelector('form');

const list = document.getElementById("faultyItems");

launchForm.addEventListener("submit", function(event) {
    const pilot = document.querySelector('input[name=pilotName]').value;
    const copilot = document.querySelector('input[name=copilotName]').value;
    const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
    const cargoLevel = document.querySelector('input[name=cargoMass]').value;

    event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
});


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       //code goes for pciking planet //only one line of code
       // call adddestinantioninfo() // one line of code
       //that it for thi function
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    })
   

    
});













