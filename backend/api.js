var events = require('../models/events.js');

exports.events = function (req, res) {
  res.json(events);
};

exports.event = function (req, res) {
  res.json(events[req.param.eventId]);
};