'use strict';

const axios = require('axios');
    class Forecast {
    constructor(obj) {
    this.date = obj.valid_date,
    this.description = obj.weather.description
    }
};

module.exports = getWeather;