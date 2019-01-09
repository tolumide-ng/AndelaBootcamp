'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usersModels = require('../models/usersModels');

var _usersModels2 = _interopRequireDefault(_usersModels);

var _meetupsModels = require('../models/meetupsModels');

var _meetupsModels2 = _interopRequireDefault(_meetupsModels);

var _questionsModels = require('../models/questionsModels');

var _questionsModels2 = _interopRequireDefault(_questionsModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = {
  createQuestion: function createQuestion(req, res) {
    var bodyOfRequest = req.body;
    var userExist = _usersModels2.default.signUsers.find(function (user) {
      return user.userId === bodyOfRequest.user;
    });
    var confirmMeetup = _meetupsModels2.default.meetups.find(function (meetup) {
      return meetup.meetupId === bodyOfRequest.meetupId;
    });

    if (userExist && confirmMeetup && bodyOfRequest.title && bodyOfRequest.body) {
      if (!userExist && !confirmMeetup) {
        return res.status(401).json({
          status: 401,
          error: 'Authentication Error!, Please confirm the meetupId and UserId is correct'
        });
      }
      var createdQuestion = _questionsModels2.default.askQuestion(bodyOfRequest);
      return res.status(201).json({
        status: 201,
        data: [createdQuestion]
      });
    }
    return res.status(404).json({
      status: 404,
      error: "No meetups/user with no Id, Please fill all required fields"
    });
  },
  upvote: function upvote(req, res) {
    var idOfQuestion = req.params.questionId;
    var doesQuestionExist = _questionsModels2.default.findQ(idOfQuestion);
    if (doesQuestionExist) {
      _questionsModels2.default.requestUpvote(idOfQuestion);
      return res.status(200).json({
        status: 200,
        data: [doesQuestionExist]
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Not found'
    });
  },
  downvote: function downvote(req, res) {
    var idOfQuestion = req.params.questionId;
    var doesQuestionExist = _questionsModels2.default.findQ(idOfQuestion);
    if (doesQuestionExist) {
      _questionsModels2.default.requestDownvote(idOfQuestion);
      return res.status(200).json({
        status: 200,
        data: [doesQuestionExist]
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Question Not Found'
    });
  }
};

exports.default = Question;
//# sourceMappingURL=questionsControllers.js.map