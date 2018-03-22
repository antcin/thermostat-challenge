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
  };
});
