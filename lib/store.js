const pool = require('./utils/pool');

const store = async(books) => {
  await Promise.all(books.map(book => insert(book)));
  pool.end();
  return books.length;
};

const insert = async({ title, coverImage, rating, price, inStock }) => {
  return await pool.query(
    'INSERT INTO BOOKS (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5)',
    [title, coverImage, rating, price, inStock]
  );
};

module.exports = store;
