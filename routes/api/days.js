var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var models = require('../../models');
// var Hotel = models.Hotel;
// var Restaurant = models.Restaurant;
// var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');

router.get('/days/:id', function(req, res, next) {

})

router.post('/', function(req, res, next) {
	console.log("NEW DAY POSTED HURRAY THIS IS TOO HARD")
	Day.create({number: 1337})
	//db query?
	//or get data from index.js's call to db
	//and create a new Day!

	res.send(200)
})



module.exports = router;