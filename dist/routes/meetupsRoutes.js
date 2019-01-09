'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _meetupsControllers = require('../controllers/meetupsControllers');

var _meetupsControllers2 = _interopRequireDefault(_meetupsControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _meetupsControllers2.default.createMeetup);
router.get('/', _meetupsControllers2.default.findAll);
router.get('/:meetupId', _meetupsControllers2.default.findOne);
router.get('/upcoming', _meetupsControllers2.default.allUpcomings);
router.post('/:meetupId/rsvps', _meetupsControllers2.default.rsvps);

exports.default = router;
//# sourceMappingURL=meetupsRoutes.js.map