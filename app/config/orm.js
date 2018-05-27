var connection = require("./connection.js");
var keyChoice = event.which;
var orm = {
  getOne: function(sound_file, table, sound_name) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = " + keyChoice ;
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }

};

module.exports = orm;
