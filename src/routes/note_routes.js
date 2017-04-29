module.exports = function(app, db) {
  app.get('/ice/', (req, res) => {
    console.log(db)
    db.collection['ice'].find((err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(items)
      }
    });

  });
  app.get('/gravity/', (req, res) => {
    console.log(db)
    db.collection('gravity').find({}, {}, { limit:100 }).toArray(function(err, items) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log(items)
        res.send(items)
      }
    })

  });
};