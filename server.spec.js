const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('server is up', () => {
        it('should return status 200', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');

            expect(response.status).toBe(expectedStatusCode);
        })
    })
})