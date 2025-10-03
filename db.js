const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',     // same as in Workbench (likely localhost)
  user: 'root',          // your MySQL username
  password: 'Jasonroxx.com52769$!',  // the password you set
  database: 'arrest_system',
  port: 3306             // default port, change if you used a custom one
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

module.exports = db;
