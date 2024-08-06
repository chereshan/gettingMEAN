var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations')
var ctrlOthers = require('../controllers/others')

//страницы местоположений
router.get('/', ctrlLocations.homelist)
router.get('/location', ctrlLocations.locationInfo)
router.get('/location/review/new', ctrlLocations.addReview)
//другие страницы
router.get('/about', ctrlOthers.about)

module.exports = router;
