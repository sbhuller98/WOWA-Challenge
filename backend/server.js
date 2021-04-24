const express = require('express')
const app = express()
const port = 3001

const connectionToDB = require('./dbHelper/connect')
const getQuery = require('./dbHelper/queryHelper')



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/rates', async (req,res) => {
    const connectTODB = await connectionToDB().catch(e => {})
    const results = await getQuery(connectTODB, 'SELECT * FROM MortRates').catch(console.log);
    console.log(results)
    res.json({ results }); 
})

app.listen(port, () => console.log('Now listening on port 3001'))