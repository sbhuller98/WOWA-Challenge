const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sukhman123',
  database: 'Rates'
})

connection.connect()

connection.query('SELECT * FROM MortRates;', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()





//https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/