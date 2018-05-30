'use strict';
module.exports = (sequelize, DataTypes) => {
  var SoundFile = sequelize.define('SoundFile', {
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
  }, {});
  SoundFile.associate = function(models) {
    // associations can be defined here
  };
  return SoundFile;
};
