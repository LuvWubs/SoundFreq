var orm = require("../config/orm.js");

var soundFile = {
  getOne: function(id, cb) {
    var id = "id=" + id;
    orm.select("table name", id,  function(res) {
      cb(res);
    });
  },
  createNew: function(name, cb) {
    orm.create("table name", [
      "column", "column"
    ], ["val", "val"], cb);
  }
};

module.exports = soundFile;