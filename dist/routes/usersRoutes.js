'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _usersControllers = require('../controllers/usersControllers');

var _usersControllers2 = _interopRequireDefault(_usersControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _usersControllers2.default.signup);

exports.default = router;
//# sourceMappingURL=usersRoutes.js.map