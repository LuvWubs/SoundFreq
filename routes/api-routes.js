var db = require("../models");

module.exports = function(app) {

  app.get("/api/sounds/:category", function(req, res) {
    console.log('api-routes finding category...', req.params.category);
    var category = req.params.category;
    db.SoundFile.findAll({
      where: {
        description: category
      }
    })
    .then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/sounds", function(req, res) {
    var sounds = req.body.sounds;
    sounds.forEach(function(sound) {
      db.SoundFile.create({
        name: sound.name,
        file: sound.file,
        description: sound.description
      });
    });

//NOTE will need this for 'all ' sounds
    // app.get("/api/sounds/all", function(req, res) {
    //   console.log('api-routes hit');
    //   db.SoundFile.findAll({})
    //     .then(function(dbPost) {
    //       res.json(dbPost);
    //     });
    // });

  });

};
