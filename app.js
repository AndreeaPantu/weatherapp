// Init storage object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state);

// Init ui object
const ui = new UI();



// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in Local Storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');

});




function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    // console.log(results.main.feels_like);
  })
  .catch(err => console.log(err));
}
