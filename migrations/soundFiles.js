var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {

  var SoundFile = sequelize.define("SoundFile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return SoundFile;
  // SoundFile.sync();
};


// module.exports = SoundFile;
