var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var soundFile = sequelize.define("sound", {
  routeName: Sequelize.STRING,
  id: Sequelize.STRING,
  name: Sequelize.STRING


  // getOne: function(id, cb) {
  //   var id = "id=" + id;
  //   orm.select("table name", id,  function(res) {
  //     cb(res);
  //   });
  // },
  // createNew: function(name, cb) {
  //   orm.create("table name", [
  //     "column", "column"
  //   ], ["val", "val"], cb);
  // }
});

module.exports = soundFile;
