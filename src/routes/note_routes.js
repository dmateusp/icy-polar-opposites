module.exports = function(app, db) {

  // GET
  app.get('/:collection/:limit', (req, res) => {

    if(typeof req.query === 'undefined') req.query = {}
    if(typeof req.params === 'undefined') req.params = {}

    if(typeof req.query.q === 'undefined') req.query.q = '{}'
    if(typeof req.params.limit === 'undefined') req.params.limit = '100'

    db.collection(req.params.collection).find(JSON.parse(req.query.q), {}, { limit: parseFloat(req.params.limit) }).toArray(function(err, items) {
      if (err) {
      console.log(err)
        res.send({'error':'An error has occurred'});
      } else {
        res.send(items)
      }
    })

  })
}