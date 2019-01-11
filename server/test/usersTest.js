import chai from 'chai';
import chaiExpect from 'chai';
import request from 'supertest';
import server from '../app';
import usersModels from './../models/usersModels';

const asset = require('chai').assert;

const should = chai.should();

describe('#USERS', () => {
  const bodyOfRequest = {firstName: 'emman', lastName: 'Nwakwo', otherName: 'Toke', email: 'jacob@davolee.com', phoneNumber: 76483925, userName: 'toke101', isAdmin: true};
  it('should return 400 if all required parameters are not supplied', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  it('should return 201 if required paramters are supplied and it fulfills requirements', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .send({firstName: 'emman', lastName: 'Nwakwo', otherName: 'Toke', email: 'jacob@davolee.com', phoneNumber: 76483925, userName: 'toke101', isAdmin: true})
      .expect('Content-Type', /json/)
      .expect(201, done);
  })

  it('should return an array', function() {
    it('should return an array', function() {
      expect(usersModels.signup(bodyOfRequest).to.be.an('array'));
    })
  })

  it('should return an empty array', function() {
    it('the array should have a length of 0', function () {
      const numberOfFoundUsers = usersModels.findUser(bodyOfRequest);
      expect(numberOfFoundUsers.length.to.be.equal(0));
    })
    })
})
