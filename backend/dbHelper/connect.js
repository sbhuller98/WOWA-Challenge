//with help from https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/

const mysql = require('mysql');

// TODO: fix security issue with displaying user and password
module.exports = async () => new Promise(
(resolve, reject) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sukhman123',
        database: 'Rates'
      })
  //checks hether we are able to connect to the database
  connection.connect(err => {
	  if (err) {
      reject(err);
      return;
    }
    resolve(connection);
  })
});




