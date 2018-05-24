const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("views"));
//NOTE will need to require the entire conrollers file for funtionality
// const routes =
require("./controllers/sound-controller.js");
//
// app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
