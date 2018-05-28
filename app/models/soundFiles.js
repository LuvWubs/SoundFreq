var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// module.exports = function(sequelize, DataTypes) {

  var SoundFile = sequelize.define("SoundFiles", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    file: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  })
//   return SoundFile;
// };

SoundFile.sync();

module.exports = SoundFile;
