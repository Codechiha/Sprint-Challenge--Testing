const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(games) {
  // returns [1]
  const [id] = await db('games').insert(games);

  return db('games')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('games');
}

function findById(id) {
  return null;
}
