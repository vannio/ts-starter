const nock = require('nock');
const supertest = require('supertest');
const { Response } = require('express');

describe('index.ts', () => {
  nock('https://api.giphy.com')
    .get('/v1/gifs/trending')
    .query(true)
    .reply(200, require('./fixtures/giphy-trending.json'));

  describe('GET /api.giphy.com/v1/gifs/trending', () => {
    test('should return 200', done => {
      const app = require('../src/index');

      supertest(app)
        .get('/')
        .then((response: Response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});
