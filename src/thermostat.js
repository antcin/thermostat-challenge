'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMP_PSM_ON = 25;
  this.MAXIMUM_TEMP_PSM_OFF = 32;
}

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn === true); {
    return this.temperature === this.MAXIMUM_TEMP_PSM_ON;
  }
  return this.temperature === this.MAXIMUM_TEMP_PSM_OFF;
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
