const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 database: "newmedb",
});

conn.connect();

module.exports = conn;