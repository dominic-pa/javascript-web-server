import { NextFunction, Request, Response } from 'express';
import config from '../config/Config';
import axios from 'axios';

const getWeather = (req: Request, res: Response, next: NextFunction) => {
    axios.get(getWeatherEndpoint(req.body.location,req.body.limit),config.axiosConfig)
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

function getWeatherEndpoint(location:string,limit:number) {
    return config.openWeatherAPIConfig.url + "q=" + location + "&limit=" + limit + "&appid=" + config.openWeatherAPIConfig.apiKey;
}

export default { getWeather };