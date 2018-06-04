var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Job = sequelize.define("jobs", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

Job.sync();


module.exports = Job;