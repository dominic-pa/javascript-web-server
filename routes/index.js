// api-routes.js
// Initialize express router
let router = require('express').Router();
var weatherController = require('../controllers/weatherController');


router.route('/getWeather')
    .get(weatherController.getWeather);

// Export API routes
module.exports = router;