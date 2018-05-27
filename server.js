
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

// Requiring our models for syncing
var db = require("./app/models");

app.use(express.static("./public/assets"));

// app.use(express.static("./public/assets/css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//NOTE will need to require the entire conrollers file for funtionality
// const routes = require("./controllers/sound-controller.js");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
