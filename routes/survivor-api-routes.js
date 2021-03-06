var db = require('../models')

module.exports = function (app) {
  app.get('/api/survivor', function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Survivor.findAll({
      include: [db.Item]
    }).then(function (dbSurvivor) {
      res.json(dbSurvivor)
    })
  })

  app.get('/api/survivor/:id', function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Survivor.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Item]
    }).then(function (dbSurvivor) {
      res.json(dbSurvivor)
    })
  })

  app.post('/api/survivor', function (req, res) {
    db.Survivor.create({
      FirstName: req.body.firstName, // mySQL:jQuery
      LastName: req.body.lastName
    })
      .then(function (dbSurvivor) {
        res.json(dbSurvivor)
      })
  })

  app.delete('/api/survivor/:id', function (req, res) {
    console.log(typeof req.params.id)
    db.Survivor.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    }).then(function (dbSurvivor) {
      res.json(dbSurvivor)
    })
  })
}
