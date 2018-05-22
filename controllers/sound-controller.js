// *** all sounds courtesy of http://bbcsfx.acropolis.org.uk/ & https://freesound.org

const express = require("express");
const app = express();
const router = express.Router();
const soundFile = require("../models/soundObj.js");

//NOTE should this be app.all?
// app.route("/", function(req, res) {
//   soundFile.getOne(sound) {
//     res.JSON
//   }
// })

router.get('/bugList', function(req, res) {
  // var id = req.params.id;
  // res.send('sound ' + req.params.id);
  console.log('you got the audio list!');
});

module.exports = router;
