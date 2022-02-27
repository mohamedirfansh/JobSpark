const express = require('express')
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
app.use(express.urlencoded({extended:false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next() 
  })

app.use('/api', require('./routes/jobRoutes'))
app.use(errorHandler)
app.listen(port,() =>console.log(`Server started on port ${port}`))

