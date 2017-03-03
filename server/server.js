var express = require('express');
var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/ourMena';
var MongoClient = require('mongodb').MongoClient
MongoClient.connect(mongoURI).then((db) => {
	console.log("Connected correctly to server");
 	var app = express();

	require('./config/middleware.js')(app, express);
	require('./config/routes')(app, db);

	var port = process.env.PORT || 8000;

	app.listen(port);
}).catch(console.log)

