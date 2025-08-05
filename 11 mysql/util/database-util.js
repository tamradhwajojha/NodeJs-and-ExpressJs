const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Tamradhwaj@3', // replace with your actual password
  database: 'airbnb',
}); 

module.exports = pool.promise(); // Exporting the promise-based pool for use in other modules