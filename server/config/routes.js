var helpers = require('./helpers.js');
var jwt = require('jsonwebtoken');

function generateToken(result) {
  return jwt.sign({
            data: result
          }, 'secret', { expiresIn: '1000h' });
}

module.exports = function (app, db) {

  app.post('/addStudent', function (req, res, next) {
    db.collection('students').insert({
      name: req.body.name,
      age: req.body.age,
      major: req.body.major,
      gpa: req.body.gpa || null,
      video: req.body.video || null,
      pic: req.body.pic || null,
      cost: req.body.cost || null,
      story: req.body.story || null,
      numberOfSponsers: req.body.numberOfSponsers || null,
      progress: req.body.progress || null,
      creditHourCost: req.body.creditHourCost || null,
      numberOfHours: req.body.numberOfHours || null
    }).then(result => {
      res.json(result.ops);
    })
  })

  app.get('/allStudents', function (req, res, next) {
    db.collection('students').find().toArray().then(results => {
      res.json(results);
    })
  })

  app.post('/registerDonor', function (req, res, next) {
    var collection = db.collection('donors');
    collection.findOne({
      email: req.body.email
    }).then(result => {
      if(result) {
        res.json({
          error: 'Email is already Registred'
        })
      } else {
        return collection.insert({
          name: req.body.name, 
          email: req.body.email, 
          password: req.body.password
        })
      }
    }).then(result => {
      var token = generateToken(result)
      res.json({
        access_token: token
      })
    }).catch(console.log)
  })

  app.post('/loginDonor', function (req, res, next) {
    var collection = db.collection('donors');
    collection.findOne({
      email: req.body.email
    }).then(result => {
      if(result && req.body.password === result.password) {
        var token = generateToken(result)
        res.json({
          access_token: token
        })
      } else {
        res.json({
          errro: 'Wrong email or password'
        })
      }
    }).catch(console.log)
  })
  
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

