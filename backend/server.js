const express = require('express')
const app = express()
const port = 3001

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
    const results = await getQuery(connectTODB, "SELECT * FROM MortRates WHERE rate_type = ? AND year = ?", [mortType, term]).catch((error) => {
        console.log(error);
        res.send('test')
    });
    res.json({ results }); 
})


app.listen(port, () => console.log('Now listening on port 3001'))