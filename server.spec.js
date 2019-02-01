const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('server is up', () => {
        it('should return status 200', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');

            expect(response.status).toBe(expectedStatusCode);
        })

        it('should respond with json', async () => {
            let response = await request(server).get('/');
            expect(response.type).toMatch(/json/i)
        })
    })

    describe('GET /games endpoint', () =>{
        it('should return status 200', async () => {
            const response = await request(server).get('/games');
            expect(response.status).toBe(200)
        })

        it('should respond with json Object', async () => {
            let response = await request(server).get('/games');
            expect(response.type).toMatch(/json/i)
        })

        it('should send back object with title, genre, releaseYear as keys', async () => {
            const expected =
            {
                title: 'Kingdom Hearts',
                genre: 'RPG Fantasy',
                releaseYear: '2002'
             }

             let response = await request(server).get('/games');
             //.toBe references, toEqual equals the content
             expect(response.body[0]).toEqual(expected);
        })
    })
})