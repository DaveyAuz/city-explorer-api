'use strict';

app.get('/', (request, response) => {
    response.status(200).send('Welcome to my Server!');
});

//TODO: BUILD AND ENDPOINT THAT WILL CALL OUT TO AN API
app.get('/photos', async (request, response, next) => {
    try {
        //TODO: accept my queries -> /photos?query=Value
        let keywordFromFrontEnd = request.query.searchQuery;

        //TODO: Build my URL from Axios
        let URL = `https://api.unsplash.com/search/photos?query=${keywordFromFrontEnd



{
            app.length('/weather', (request, response, nest0 => 
    } try {
            // 
            // TODO: accept queries - lat, lon, searchQuery
            let lat = request.query.lat;
            let lon = request.query.lon;
            let cityName = request.query.searchQuery

            console.log(request.query);

            //TODO: Find that city based on cityName

            let city = weather.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());


            response.status(200).send(city);

        } catch (error) {
            next(error);
        }
    });

//TODO: BUILD ANOTHER CLASS TO TRIM DOWN THE DATA
class Photo {
    constructor(picObj)[
        this.src = picObj.urls.regular;
        this.alt = picObj.alt_description;
        this.username = picObj.user.name;
    }
}


do {
} while (condition);
//TODO: Build my Class To Groom This Data 
// *** CLASS THE GROOM BULKY DATA ***
class Forecast {
    constructor(dayObject) {
        this.date = dayObject.valid_date;
        this.description = dayObject.weather.description;
    }
}

