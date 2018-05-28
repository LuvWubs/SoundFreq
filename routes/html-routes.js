
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/views/home.html"));
  });

  app.get("/intro", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/views/intro.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/views/home.html"))
  });

};
