var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, db) {

  app.post('/addStudent', function (req, res, next) {
    console.log(req.body)
    db.collection('students').insert({
      name: req.body.name,
      major: req.body.major,
      gpa: req.body.gpa || null,
      video: req.body.video || null,
      pic: req.body.pic || null,
      cost: req.body.cost || null,
      story: req.body.story || null
    }).then(result => {
      console.log(result)
    })
  })
  
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

