$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp()

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemp();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemp();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemp();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power_saving_status').text('on');
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power_saving_status').text('off');
  });

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })
  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#outside-temperature').text(data.main.temp);
  });
 }
});
