import chai from 'chai';
import request from 'supertest';
import server from '../app';
import meetupsModels from './../models/meetupsModels';

const asset = require('chai').should();

const should = chai.should();

describe('#MEETUPS request to meetups', () => {
  const forAllMeetupsTest = [10, 201, 10];
  const requirementsToCreateMeetup = {
    topic: 'Node.js environment',
    location: 'Nigeria',
    happeningOn: 10/12/19, 
    tags: ['javascript', 'ES-6']
  }
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

  it('should return 422 if all required parameters are not supplied is not supplied', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send({topic: 'emman', location: 'Nwakwo', tags: ['temidayo']})
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

  // rsvps a meetup
  it('should return 404 if no user has rsvps for the event', (done) => {
    request(server)
      .get('/api/v1/74550289/rsvps')
      .expect(404, done)
      .expect('Content-Type', /html/);
  });

  it('should return an Array with length greater than 0', function() {
    it('should return an array', function() {
      const theCreatedMeetup = meetupsModels.create(requirementsToCreateMeetup)
      expect(meetupsModels.create(bodyOfRequest).to.be.an('array'));
      expect(meetupsModels.length.to.be.equal(1))`;`
    })
  })

});
