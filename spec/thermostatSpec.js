'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20)
  });

  it('increases in temperature with up()', function() {
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });


  it('increases in temperature with down()', function() {
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19)
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('has a power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('power mode can switch back on', function () {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has a maximum temp of 25 degrees if PSM is on', function() {
    for (var i = 0; i < 6; i++) {
    thermostat.up();
    }
    expect(thermostat.currentTemp()).toEqual(25)
  });
});
