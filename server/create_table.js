
const { Pool } = require('pg');

const pool = new Pool({
  user: 'nuqcrsqy',
  password: 'AUZHcrS7Iqtf9eH5rI6rR9CLLQyCrXg1',
  host: 'lallah.db.elephantsql.com',
  database: 'nuqcrsqy'
})

pool.connect();

// pool.query(`
// CREATE TABLE assignments (
//   id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255),
//   content TEXT,
//   day INTEGER,
//   chapter INTEGER,
//   duration INTEGER
// );`).then(pool.query(`SELECT * FROM assignments;`))

pool.query(`
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
                   id SERIAL PRIMARY KEY NOT NULL,
                   name VARCHAR(255) NOT NULL,
                   email VARCHAR(255),
                   tel VARCHAR(255));

`)

pool.query(`
INSERT INTO users(name, email, tel) 
VALUES('Fedor', 'f@gmail.com', '777-777-7777'),
      ('Timur', 't@gmail.com', '555-555-5555'),
      ('Brandon', 'b@gmail.com', '333-333-33333');
`)

// FROM ELEPH. SQL
const showWidgets = () => {
    return pool.query(`
    SELECT * FROM assignments;`)
    .then(res => console.log(`FROM DB:`, res.rows))
  }
showWidgets();