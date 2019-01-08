import chai from 'chai';
import request from 'supertest';
import server from '../app';

const should = chai.should();

describe('QUESTIONS', () => {
  // post request to question
  it('should return 422 if all required fields are not filled', (done) => {
    request(server)
      .get('/api/v1/questions/')
      .expect('Content-Type', /html/)
      .expect(422, done);
  });

  it('should return 404 if the questionId does not exist', (done) => {
    request(server)
      .patch('/api/v1/questions/:questionId/upvote')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });

  it('should return 404 if the questionId does not exist', (done) => {
    request(server)
      .patch('/api/v1/questions/:questionId/downvote')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
