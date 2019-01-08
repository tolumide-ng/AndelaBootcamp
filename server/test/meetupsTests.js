import chai from 'chai';
import request from 'supertest';
import server from '../app';

const should = chai.should();

describe('#MEETUPS rquest to meetups', () => {
  // GET request to all meetups
  it('should return 404 if there are no meetups', (done) => {
    request(server)
      .get('/api/v1/meetups')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });

  // Create meetups
  it('should return 422 if all required parameters are not supplied is not supplied', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });

  // find a specific meetup
  it('should return 404 if specific meetup does not exist', (done) => {
    request(server)
      .get('/api/v1/:meetupsId')
      .expect(404, done);
  });

  // Upcoming meetups
  it('should return 404 if there are no meetups', (done) => {
    request(server)
      .get('/api/v1/upcoming')
      .set({ theLength: 0 })
      .expect(404, done);
  });

  it('should return 404 if no user has rsvps for the event', (done) => {
    request(server)
      .get('/api/v1/74550289/rsvps')
      .expect(404, done)
      .expect('Content-Type', /html/);
  });
});
