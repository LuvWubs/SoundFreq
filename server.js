const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3080;
const app = express();

app.use(express.static("scripts"));
app.use(express.static("content"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//NOTE will need to require the entire conrollers file for funtionality
const routes = require("./controllers/sound-controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
