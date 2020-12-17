const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://postgres:kevin@localhost:5432/postgres',
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

pool.on('connect', () => console.log('Postgres connected'));

module.exports = pool;
