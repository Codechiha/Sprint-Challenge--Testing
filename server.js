const express = require('express');

const server = express();

server.use(express.json());

let games = [
    {
       title: 'Kingdom Hearts',
       genre: 'RPG Fantasy',
       releaseYear: '2002'
    },
    {
        title: 'Kingdom Hearts 2',
        genre: 'RPG Fantasy',
        releaseYear: '2005'
     },
     {
        title: 'Kingdom Hearts 3',
        genre: 'RPG Fantasy',
        releaseYear: '2019'
     },
     {
        title: 'Kingdom Hearts 4',
        genre: 'RPG Fantasy',
        releaseYear: '2040'
     }
]



server.get('/', (req, res) => {
    res
        .status(200)
        .json('running')
})

server.get('/games', (req, res) => {
    res
        .status(200)
        .json(games)
})

module.exports = server