
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/views/intro.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/views/home.html"));
  });
  // 
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../app/views/home.html"))
  // });

};
