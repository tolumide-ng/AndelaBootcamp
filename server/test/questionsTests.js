import chai from 'chai';
import request from 'supertest';
import server from '../app';

const should = chai.should();

describe('QUESTIONS', () => {
  // post request to question
  it('should return 422 if one or more required fields are not filled', (done) => {
    request(server)
      .post('/api/v1/questions/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });
  
  it('should return 404 if the questionId for upvote does not exist', (done) => {
    request(server)
      .patch('/api/v1/questions/900000/upvote')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('should return 404 if the questionId for downvote does not exist', (done) => {
    request(server)
      .patch('/api/v1/questions/900000/downvote')
      .set('Accept', 'application/json')
      .expect(404, done);
  });
});