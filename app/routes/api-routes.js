var Job = require("../models/jobs.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {

    Job.findAll({}).then(function(results) {
      res.json(results);
    });

  });


  app.post("/api/new", function(req, res) {

    console.log("Job Data:");
    console.log(req.body);

    Job.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      res.end();
    });

  });

};