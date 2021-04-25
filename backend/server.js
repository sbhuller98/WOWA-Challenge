const express = require('express')
const app = express()
const port = 3001

var cors = require('cors')

app.use(cors())



// gets our helper functions from dbHelper folder
const connectionToDB = require('./dbHelper/connect')
const getQuery = require('./dbHelper/queryHelper')

//Queries our database based on query parameters in URL
app.get('/rates/:termLength/:mortgageType', async (req,res) => {
    const connectTODB = await connectionToDB().catch(e => {})

    //query parameters are stored locally
    const term = req.params.termLength
    const mortType = req.params.mortgageType
    
    //checks that we have both query paramaters
    if (!term || !mortType) {
        console.log('Unable to fetch mortgage rate data. Please provide all required query paramaters.')
        res.send('Please specify a term length and type of rate requested')
    }   
    
    //we send query to our database via our query helper
    const results = await getQuery(connectTODB, "SELECT * FROM (SELECT id, source, year, down_payment_level, rate_type, MIN(rate) as rate FROM (SELECT * FROM MortRates WHERE rate_type = ? AND year = ?) AS T1 GROUP BY source) AS T2 ORDER BY rate ASC", [mortType, term]).catch((error) => {
        console.log(error);
        res.send('Error, could not fetch data')
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ results }); 
})

//"SELECT * FROM MortRates WHERE rate_type = ? AND year = ? ORDER BY rate ASC"

app.listen(port, () => console.log('Now listening on port 3001'))