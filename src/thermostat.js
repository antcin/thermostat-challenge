'use strict';

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature --;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
