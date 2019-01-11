import chai from 'chai';
import request from 'supertest';
import server from '../app';
import meetupsModels from './../models/meetupsModels';

const asset = require('chai').should();

const should = chai.should();

describe('#MEETUPS request to meetups', () => {
  const doesUserExist = {
    location: 'Lekkqi',
    topic: 'Javascript-2017', 
    tags: ['Humans', 'Andela'],
  }
  const requirementsToCreateMeetup = {
    topic: 'Node.js environment',
    location: 'Nigeria',
    happeningOn: 10/12/19, 
    tags: ['javascript', 'ES-6'], 
    isAdmin: false
  }

  const adminUser = {
    topic: 'Node.js environment',/* 
    location: 'Nigeria', */
    happeningOn: 10/12/19, 
    tags: ['javascript', 'ES-6'], 
    isAdmin: true
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
    it('should return 401 if user does not exist', (done) => {
      request(server)
        .post('/api/v1/meetups')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401, done);
    });

    
  it('should return 401 if not all required parameters are supplied and user is not Admin', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send({doesUserExist: true})
      .send({topic: 'emman', location: 'Nwakwo', tags: ['temidayo']})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401, done);
  });
  it('should return 401 if all parameters are supplied but user is not admin', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send({doesUserExist: true})
      .send(requirementsToCreateMeetup)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401, done);
  });

  it('should return 401 if not all parameteres are spplied and user is admin', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send({doesUserExist: true})
      .send(adminUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401, done);
  })

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
