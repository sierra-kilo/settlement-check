const mysql = require('mysql')
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'settlement_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

export default connection;
