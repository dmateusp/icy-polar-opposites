// server.js

const express        = require('express')
const MongoClient    = require('mongodb').MongoClient
const bodyParser     = require('body-parser')
const db             = require('./config/db')

const app            = express()

const port = 8000

MongoClient.connect(db.url, (err, database) => {
  if (err) {console.log(err);  return console.log("Error DB not connecting")}

  console.log(database)

  require('./routes')(app, database)

  app.listen(port, () => {
    console.log('We are live on ' + port)
  });
})