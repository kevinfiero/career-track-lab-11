const pool = require('./utils/pool');

const store = async(books) => {
  return await Promise.all(books.map(book => insert(book)));
};

const insert = async({ title, coverImage, rating, price, inStock }) => {
  console.log('test');
  await pool.query(
    'INSERT INTO MOVIES (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, coverImage, rating, price, inStock]
  );

  return;

};

module.exports = store;
