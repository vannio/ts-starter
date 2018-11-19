import nock from 'nock';
import request, { Response } from 'supertest';
import app from '../src/app';

describe('index.ts', () => {
  nock('https://api.giphy.com')
    .get('/v1/gifs/trending')
    .query(true)
    .reply(200, require('./fixtures/giphy-trending.json'));

  describe('GET /api.giphy.com/v1/gifs/trending', () => {
    test('should return 200', async () => {
      return request(app)
        .get('/')
        .then((response: Response) => {
          return expect(response.status).toBe(200);
        });
    });
  });
});
