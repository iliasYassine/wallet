const express = require('express')
const { Fixer } = require('fixer-api/dist/Fixer')
const app = express()
const port = 3001
const fixer = require("fixer-api");
fixer.baseUrl = "http://data.fixer.io/api/"

var cors = require('cors')
//const router = express.Router();
const route = require('./route/route.js')
app.use(cors())



app.use('/', route);


var bodyParser = require('body-parser')
///////////////////////////////////////////////////
//////////////////////////////////////////////////


///// bodyparser///////
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
