import nock from 'nock';
import request, { Response } from 'supertest';
import app from '../src/app';

describe('index.ts', () => {
  describe('GET /api.giphy.com/v1/gifs/trending', () => {
    let scope = nock('https://api.giphy.com')
      .get('/v1/gifs/trending')
      .query(true);

    afterEach(() => nock.cleanAll());

    test('should return 200', async () => {
      scope.reply(200, require('./fixtures/giphy-trending.json'));

      return request(app)
        .get('/')
        .then((response: Response) => {
          return expect(response.status).toBe(200);
        });
    });

    test('should return 500', async () => {
      scope.reply(500);

      return request(app)
        .get('/')
        .then((response: Response) => {
          return expect(response.status).toBe(500);
        });
    });
  });
});
