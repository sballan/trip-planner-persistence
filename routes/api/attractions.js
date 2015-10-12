var express = require('express');
var mogoose = require('mongoose');
var router = express.Router();
var models = require('../../models');

var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');

//  ++-- GET ALL Attractions --++  //
router.get('/', function(req, res, next) {
	Promise.all([
    Hotel.find(),
    Restaurant.find(),
    Activity.find()
    ])
	.then(function(all) {
		console.log("This get's all the attractions, -> unfinished.");
	})

})

//  ++-- POST NEW Attractions --++  //
router.post('/:currentDay/:attractionID', function(req, res, next) {
	console.dir(req.body)
	// Day.create({number: 444}, function(err, dayInfo) {
	// 	console.log("Day info is: " + dayInfo);
	// })
	res.send(200);
})



module.exports = router;