const { Pool } = require('pg');

const pool = new Pool({
  user: 'Georgianwa',
  host: 'localhost:3000',
  database: 'mydatabase',
  password: 'Arit2000!',
  port: 5432,
});

module.exports = pool;