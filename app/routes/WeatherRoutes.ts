import express from 'express';
import controller from '../controllers/WeatherController';

const router = express.Router();

router.post('/getWeather', controller.getWeather);

export = router;