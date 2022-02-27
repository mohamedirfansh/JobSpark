const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
// app.options('*', cors())
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/api', require('./routes/jobRoutes'))
app.listen(port,() =>console.log(`Server started on port ${port}`))

