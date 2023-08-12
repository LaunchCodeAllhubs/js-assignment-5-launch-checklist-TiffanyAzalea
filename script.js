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
       //console.log(listedPlanets);
   }).then(function () {
      // console.log(listedPlanets);

      let planet = pickPlanet(listedPlanets);
      console.log(planet);
       
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)// call adddestinantioninfo() // one line of code
    
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    })
   

    
});



