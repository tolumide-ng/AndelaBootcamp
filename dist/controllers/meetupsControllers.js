'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _meetupsModels = require('../models/meetupsModels');

var _meetupsModels2 = _interopRequireDefault(_meetupsModels);

var _validate = require('../validations/validate');

var _validate2 = _interopRequireDefault(_validate);

var _usersModels = require('../models/usersModels');

var _usersModels2 = _interopRequireDefault(_usersModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meetups = {
  createMeetup: function createMeetup(req, res) {
    // all paraters are required
    var data = req.body;
    var dateHappening = new Date(data.happeningOn) > new Date();
    if (!data.topic || !data.location || !data.tags || !data.happeningOn || !dateHappening) {
      return res.status(422).json({
        status: 422,
        error: 'All fields are required'
      });
    }
    var createdMeetup = meetupModel.create(data);
    return res.status(201).json({
      status: 201,
      data: [createdMeetup]
    });
  },
  findAll: function findAll(req, res) {
    var allMeetups = _meetupsModels2.default.getAll();
    if (!allMeetups.length) {
      return res.status(404).json({
        status: 404,
        error: 'Meetups not found'
      });
    }
    return res.status(200).json({
      status: 200,
      data: allMeetups.map(function (meetup) {
        return {
          meetup: meetup.meetupId,
          topic: meetup.topic,
          location: meetup.location,
          happeningOn: meetup.happeningOn,
          tags: meetup.tags
        };
      })
    });
  },
  findOne: function findOne(req, res) {
    var params = req.params.meetupId;
    var theMeetup = _meetupsModels2.default.getOne(params);
    if (theMeetup.length == 0) {
      return res.status(404).json({
        status: 404,
        error: 'Meetup Not Found'
      });
    }
    return res.status(200).json({
      status: 200,
      data: [theMeetup]
    });
  },
  allUpcomings: function allUpcomings(req, res) {
    var upcomingMeetups = meetupModel.upcomings();
    if (upcomingMeetups.length) {
      return res.status(404).json({
        status: 404,
        error: 'No meetups found'
      });
    }
    return res.status(200).json({
      status: 200,
      data: upcomingMeetups.map(function (upcomingMeetup) {
        return {
          meetupId: upcomingMeetup.meetupId,
          title: upcomingMeetup.topic,
          location: upcomingMeetup.location,
          happeningOn: upcomingMeetup.happeningOn,
          tags: upcomingMeetup.tags
        };
      })
    });
  },
  rsvps: function rsvps(req, res) {
    var data = req.body;
    var confirmUser = _usersModels2.default.findUser(function (user) {
      return user.userId === data.user;
    });
    var confirmMeetup = _meetupsModels2.default.getOne(data.meetup);
    var confirmParams = req.body.meetupId === req.params.meetupId;
    var confirmStatus = data.status === 'yes' || 'no' || 'maybe';
    if (confirmMeetup && confirmParams) {
      if (confirmStatus) {
        _usersModels2.default.rsvp(data);
        return res.status(200).json({
          status: 200,
          data: [confirmUser]
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'Ensure information provided are valid, Not found'
      });
    }
    return res.status(422).json({
      status: 422,
      error: 'Ensure information provided are valid'
    });
  }
};

exports.default = meetups;
//# sourceMappingURL=meetupsControllers.js.map