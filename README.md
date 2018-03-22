# Thermostat Challenge
Week 5 Challenge

Summary
----
This simple web app allows a user to set the temperature on a digital thermostat.

How to run the web app
----
```sh
$ git clone git@github.com:[antcin]/thermostat-challenge.git
$ cd Thermostat.js
$ open index.html
```
How to run the feature test:
```sh
$ cd Thermostat.js
$ open SpecRunner.html
```

Functionalities
----
- The user can increase the temperature.
- The user can decrease the temperature.
- The user can reset the temperature.
- The user can turn a power saving mode on and off.
- The user can enter a location and the app will return the temperature in that location.

Logic
----
- The thermostat is initialised at a default temperature of 20°C.
- The minimum temperature is 10°C.
- When power saving mode is on, the temperature can be increased to a maximum value of 25°C.
- When power saving mode is off, the temperature can be increased to a maximum value of 32°C.
- The energy usage is indicated as below:
  - low-usage: 10°C - 17°C
  - medium-usage: 18°C - 25°C
  - high-usage: 26°C - 32°C

Programming languages used
----
- Back-end
  - JavaScript
    - [jQuery library](https://jquery.com/)
    - [Jasmine - testing framework](https://jasmine.github.io/)
- Front-end
  - HTML
  - CSS
  - [OpenWeatherMap API](https://openweathermap.org/api)

Improvements required
----
- Edge cases
 - When switching from power saving mode on to off is , reset maximum temperature to 25°C.
- CSS Design.
- Implement persistence.

Reflections
----
This was my very first approach to develop a web app using JavaScript (JS). I found this language less intuitive than Ruby, and slightly more cumbersome with regards to syntax and TDD. Nonetheless, I really enjoyed the challenge and appreciate the flexibility of JS; and it is great to see that, in only four days, I could get a grasp on it. Using [walkthroughs](https://github.com/makersacademy/course/tree/master/thermostat) did help to reinforce my understanding of some concepts. There is still a long way to go, however I feel rather satisfied with what I achieved.
