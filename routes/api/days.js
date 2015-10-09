var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var models = require('../../models');
// var Hotel = models.Hotel;
// var Restaurant = models.Restaurant;
// var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');

//  ++-- GET ALL Days --++  //
router.get('/', function(req, res, next) {
	Day.find().exec()
	.then(function(daysArray){
		res.send(daysArray)
	})
})
//  ++-- GET ONE Day --++  //
router.get('/:id', function(req, res, next) {
	Day.findById(req.params.id).exec()
	.then(function(day) {
		res.send(day)
	})
})
//  ++-- POST NEW Day --++  //
router.post('/', function(req, res, next) {
	Day.create({number: 1337})
	res.send(200)
})

//  ++-- DELETE Day --++  //
router.delete('/:id', function(req, res, next) {
	Day.findByIdAndRemove(req.params.id).exec()
	.then(function(day) {
		res.send(200, "We deleted it");
	})
})


module.exports = router;