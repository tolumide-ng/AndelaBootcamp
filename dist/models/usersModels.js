'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);

    this.users = [];
    this.signUsers = [];
  }

  _createClass(User, [{
    key: 'rsvp',
    value: function rsvp(data) {
      var newUser = {
        userId: _uuid2.default.v4(),
        registeredId: _moment2.default.now(),
        meetupId: data.meetupId,
        firstName: data.firstName,
        response: data.status
      };
      this.users.push(newUser);
      return newUser;
    }
  }, {
    key: 'signup',
    value: function signup(data) {
      var newUser = {
        userId: _uuid2.default.v4(),
        registeredId: _moment2.default.now(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      };
      this.signUsers.push(newUser);
      return newUser;
    }
  }, {
    key: 'findUser',
    value: function findUser(data) {
      return this.signUsers.find(function (user) {
        return user.userId === data;
      });
    }
  }]);

  return User;
}();

exports.default = new User();
//# sourceMappingURL=usersModels.js.map