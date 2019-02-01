
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Kingdom Hearts', genre: 'RPG Fantasy', releaseYear: 2002},
        {title: 'Kingdom Hearts 2', genre: 'RPG Fantasy', releaseYear: 2005},
        {title: 'Kingdom Hearts 3', genre: 'RPG Fantasy', releaseYear: 2019},
        {title: 'Kingdom Hearts 4', genre: 'RPG Fantasy', releaseYear: 2049}
      ]);
    });
};
