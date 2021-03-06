const axios = require('axios');
const dotenv = require('dotenv');
const openWeather = {
    url: "http://api.openweathermap.org/geo/1.0/direct?"
};
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};

dotenv.config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

exports.getWeather = function (req, res){
    let weatherEndpoint = getWeatherEndpoint(req.body.location,req.body.limit);
    axios.get(weatherEndpoint,axiosConfig)
        .then(weatherAPIResponse => {
            if(weatherAPIResponse.status === 200){
                console.log("weather api response",weatherAPIResponse.data);
                res.status(200).send(weatherAPIResponse.data);
            }
        }).catch(err => {
            console.log("Error while calling getWeather:::::::",err.message,"\nstackTrace:::::::",err.stack);
            res.status(500).send(err);
        })
}

function getWeatherEndpoint(location,limit) {
    return openWeather.url + "q=" + location + "&limit=" + limit + "&appid=" + WEATHER_API_KEY
}