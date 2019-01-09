'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _usersModels = require('./usersModels');

var _usersModels2 = _interopRequireDefault(_usersModels);

var _meetupsModels = require('./meetupsModels');

var _meetupsModels2 = _interopRequireDefault(_meetupsModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
  function Question() {
    _classCallCheck(this, Question);

    this.questions = [];
  }

  _createClass(Question, [{
    key: 'askQuestion',
    value: function askQuestion(requestBody) {
      var meetupExist = _meetupsModels2.default.getOne(requestBody.meetupId);
      var userExist = _usersModels2.default.findUser(requestBody.userId);
      var theQuestion = {
        questionId: _uuid2.default.v4(),
        createdOn: _moment2.default.now(),
        createdBy: userExist.userId,
        meetupId: meetupExist.meetupId,
        title: requestBody.title,
        body: requestBody.body,
        vote: 0
      };
      this.questions.push(theQuestion);
      return theQuestion;
    }
  }, {
    key: 'findQ',
    value: function findQ(idOfRequestedQuestion) {
      return this.questions.find(function (question) {
        return question.questionId === idOfRequestedQuestion;
      });
    }
  }, {
    key: 'requestUpvote',
    value: function requestUpvote(questionId) {
      // does the question exist
      var theUpvotedQuestion = this.findQ(questionId);
      theUpvotedQuestion.vote += 1;
      return theUpvotedQuestion;
    }
  }, {
    key: 'requestDownvote',
    value: function requestDownvote(questionId) {
      // does the question exist
      var theDownvotedQuestion = this.findQ(questionId);
      theDownvotedQuestion.vote -= 1;
      return theDownvotedQuestion;
    }
  }]);

  return Question;
}();

exports.default = new Question();
//# sourceMappingURL=questionsModels.js.map