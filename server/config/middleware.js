var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // configure our server with all the middleware and routing
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
		next();
	});
  app.use(express.static(__dirname + '/../../client'));
};
