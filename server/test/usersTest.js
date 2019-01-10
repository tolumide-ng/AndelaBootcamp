import chai from 'chai';
import request from 'supertest';
import server from '../app';

const should = chai.should();

describe('#USERS', () => {
  it('should return 400 if all required parameters are not supplied', (done) => {
    request(server)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  /* it('should return 201 if all required parameters are supplied and no previous similar email/userId', (done) => {
    request(server)
      .post('/api/v1/users')
      .send({ determingFactorsForCreation: true })
      .send({ doesUserAlreadyExist: false })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  }) */
});
