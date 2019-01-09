'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usersModels = require('../models/usersModels');

var _usersModels2 = _interopRequireDefault(_usersModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
  signup: function signup(req, res) {
    var data = req.body;
    var theEmail = data.email;
    var theConfirm = _usersModels2.default.signUsers.find(function (user) {
      return user.email === theEmail;
    });
    if (data.firstName && data.lastName && data.email) {
      if (!theConfirm) {
        var theUser = _usersModels2.default.signup(data);
        return res.status(201).json({
          status: 201,
          data: [theUser]
        });
      }
      return res.status(409).json({
        status: 409,
        error: ' Email already exist'
      });
    }
    return res.status(400).json({
      status: 400,
      error: 'Bad Syntax: All fields are required'
    });
  }
};

exports.default = User;
//# sourceMappingURL=usersControllers.js.map