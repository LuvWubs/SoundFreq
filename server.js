const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("scripts"));
app.use(express.static("content"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
