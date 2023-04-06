'use strict';

const axios = require('axios');
// let weatherCache = {};
// async function getWeather(request, response, next) {
//         console.log('getWeather')// try {
//         console.log(request.query);
//         const city = request.query.city;
//         const key = process.env.REACT_APP_WEATHERBIT_API_KEY;
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
//         const weather = await axios.get(url);
//         response.status(200).send(weather.data);
//         let weatherKey = weather.data.weather[0];
//     };
    //     if (weatherCache[weatherKey] && (Date.now() - weatherCache[weatherKey].timestamp) < 8.64e+7) {
    //         console.log('weatherCACHE HIT!', weatherCache);

    //         response.status(200).send(weatherCache[weatherKey].data);

    //     } else {
    //         console.log('weatherCACHE NOT HIT :(');

    //         let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${queriedLat}&lon=${queriedLon}`

    //         let weatherDatafromAxios = await axios.get(weatherUrl);
    //         console.log(weatherDatafromAxios);
            
    //         let cityForecast = weatherDatafromAxios.data.data.map((day, idx) => new Forecast(day));
    //         console.log(cityForecast);
    //         weatherCache[weatherKey] = {
    //             data: cityForecast,
    //             timestamp: Date.now()
    //         };
    //         response.status(200).send(cityForecast);
    //     }
    // } catch (error) {
    //    next(error);
    // }
};

    class Forecast {
    constructor(obj) {
    this.date = obj.valid_date,
    this.description = obj.weather.description
    }
};

module.exports = getWeather;