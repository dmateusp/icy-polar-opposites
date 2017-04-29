module.exports = function(app, db) {
  app.get('/ice/', (req, res) => {
    console.log(db)
    db.collection['ice_data'].find((err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(items);
      }
    });

  });
};