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
  // post request to question
  it('should return 404 if all required fields are not filled', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/questions/').expect('Content-Type', /html/).expect(404, done);
  });

  it('should return 404 if the questionId does not exist', function (done) {
    (0, _supertest2.default)(_app2.default).patch('/api/v1/questions/:questionId/upvote').expect('Content-Type', /json/).expect(404, done);
  });

  it('should return 404 if the questionId does not exist', function (done) {
    (0, _supertest2.default)(_app2.default).patch('/api/v1/questions/:questionId/downvote').expect('Content-Type', /json/).expect(404, done);
  });
});
//# sourceMappingURL=questionsTests.js.map