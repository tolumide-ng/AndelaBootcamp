'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _meetupsRoutes = require('./routes/meetupsRoutes');

var _meetupsRoutes2 = _interopRequireDefault(_meetupsRoutes);

var _usersRoutes = require('./routes/usersRoutes');

var _usersRoutes2 = _interopRequireDefault(_usersRoutes);

var _questionsRoutes = require('./routes/questionsRoutes');

var _questionsRoutes2 = _interopRequireDefault(_questionsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use((0, _cors2.default)());

app.use('/api/v1/meetups', _meetupsRoutes2.default);
app.use('/api/v1/questions', _questionsRoutes2.default);
app.use('/api/v1/users', _usersRoutes2.default);

app.get('/', function (req, res) {
  res.status(200).json({
    message: 'welcome to the api'
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  return 'connected on port ' + port;
});

exports.default = app;
//# sourceMappingURL=app.js.map