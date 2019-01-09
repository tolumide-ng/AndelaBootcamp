'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _questionsControllers = require('../controllers/questionsControllers');

var _questionsControllers2 = _interopRequireDefault(_questionsControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _questionsControllers2.default.createQuestion);
router.patch('/:questionId/upvote', _questionsControllers2.default.upvote);
router.patch('/:questionId/downvote', _questionsControllers2.default.downvote);

exports.default = router;
//# sourceMappingURL=questionsRoutes.js.map