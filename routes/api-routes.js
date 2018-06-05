var db = require("../models");

module.exports = function(app) {

  app.get("/api/sounds/:category", function(req, res) {
    var category = req.params.category;
    if (category !== 'all') {
      db.SoundFile.findAll({
        where: {
          description: category
        }
      })
      .then(function(results) {
        res.json(results);
      });
    } else {
      db.SoundFile.findAll({})
      .then(function(results) {
        res.json(results);
      });
    }
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

  });

};
