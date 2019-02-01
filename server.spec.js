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

    describe('POST /games endpoint', () => {
        it('should add new post to the games array', async () => {
            const body = 
            {
                title: 'Kingdom Hearts 5',
                genre: 'RPG Fantasy',
                releaseYear: '2079'
             }

             let response = await request(server)
                .post('/games')
                .send(body)

            expect(response.body)
                .toEqual({
                    title: 'Kingdom Hearts 5',
                    genre: 'RPG Fantasy',
                    releaseYear: '2079'
                })
        })

        it('should return 422 status code if any key is missing', async () => {
        //Test for 2 missing keys
            //if key1 present, key2 and key3 missing
            let response = 
            await request(server)
            .post('/games')
            .send({ title: 'Kingdom Hearts' })

            expect(response.status).toBe(422);

            //if key2 present, key1 and key3 missing
             response = 
            await request(server)
            .post('/games')
            .send({ genre: 'RPG Fantasy' })

            expect(response.status).toBe(422);

            //if key3 present, key1 and key2 missing
             response = 
            await request(server)
            .post('/games')
            .send({ releaseYear: '2002' })

            expect(response.status).toBe(422);
            
        //Test for 1 missing key
            //key 1 and 2 present, key3 missing
             response = 
            await request(server)
            .post('/games')
            .send({ title: 'Kingdom Hearts', genre: 'RPG Fantasy' })

            expect(response.status).toBe(422);

            //key1 and 3 present, key 2 missing
             response = 
            await request(server)
            .post('/games')
            .send({ title: 'Kingdom Hearts', releaseYear: '2002' })

            expect(response.status).toBe(422);

            //key 2 and 3 present, key 1 missing
             response = 
            await request(server)
            .post('/games')
            .send({ genre: 'RPG Fantasy', releaseYear: '2002' })

            expect(response.status).toBe(422);

        })
        it('should return code 201 on successful post', async () => {
            let response = 
            await request(server)
            .post('/games')
            .send({ title: 'Kingdom Hearts 2', genre: 'RPG Fantasy', releaseYear: '2002'})

            expect(response.status).toBe(201);
        })

    })
})