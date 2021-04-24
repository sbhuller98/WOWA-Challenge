const mysql = require('mysql');

  

module.exports = async () => new Promise(
(resolve, reject) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sukhman123',
        database: 'Rates'
      })
  connection.connect(err => {
	  if (err) {
      reject(err);
      return;
    }
    resolve(connection);
  })
});




