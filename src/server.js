// server.js

const express        = require('express')
const MongoClient    = require('mongodb').MongoClient
const bodyParser     = require('body-parser')
const db             = require('./config/db')

const app            = express()

app.use(express.static('public'))
app.use(express.static('public/presentation'))

if (typeof process.env.PORT === 'undefined') process.env.PORT = '8000'

MongoClient.connect(db.url, (err, database) => {
  if (err) {console.log(err);  return console.log("Error DB not connecting")}

  require('./routes')(app, database)

  app.listen(process.env.PORT, () => {
    console.log('We are live on ' + process.env.PORT)
  })
})