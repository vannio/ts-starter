var nock = require('nock');
var supertest = require('supertest');
// const app = require('../src/index');
describe('blergh.ts', function () {
    nock('https://api.giphy.com')
        .get('/v1/gifs/trending')
        .reply(200, require('./fixtures/giphy-trending.json'));
    describe('GET /api.giphy.com/v1/gifs/trending', function () {
        test('should return 200', function (done) {
            supertest(app)
                .get('/')
                .then(function (response) {
                expect(response).toBe(200);
                done();
            });
        });
    });
});
