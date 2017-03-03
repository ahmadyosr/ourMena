var helpers = require('./helpers.js'); // our custom middleware

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
      progress: req.body.progress || null
    }).then(result => {
      res.json(result.ops);
    })
  })

  app.get('/allStudent', function (req, res, next) {
    db.collection('students').find().toArray().then(results => {
      res.json(results);
    })
  })
  
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

