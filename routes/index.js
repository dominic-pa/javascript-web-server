// api-routes.js
// Initialize express router
let router = require('express').Router();
var weatherController = require('../controllers/weatherController');


router.route('/getWeather')
    .post(weatherController.getWeather);

// Export API routes
module.exports = router;