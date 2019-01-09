'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

describe('#MEETUPS rquest to meetups', function () {
  // GET request to all meetups
  it('should return 404 if there are no meetups', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/meetups').set('Accept', 'application/json').expect('Content-Type', /json/).expect(404, done);
  });

  // Create meetups
  it('should return 422 if all required parameters are not supplied is not supplied', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/meetups').set('Accept', 'application/json').expect('Content-Type', /json/).expect(422, done);
  });

  // find a specific meetup
  it('should return 404 if specific meetup does not exist', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/:meetupsId').expect(404, done);
  });

  // Upcoming meetups
  it('should return 404 if there are no meetups', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/upcoming').set({ theLength: 0 }).expect(404, done);
  });

  it('should return 404 if no user has rsvps for the event', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/74550289/rsvps').expect(404, done).expect('Content-Type', /html/);
  });
});
//# sourceMappingURL=meetupsTests.js.map