'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

describe('QUESTIONS', function () {
  it('should return 400 if all required parameters are not supplied', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').set('Accept', 'application/json').expect('Content-Type', /json/).expect(400, done);
  });
});
//# sourceMappingURL=usersTest.js.map