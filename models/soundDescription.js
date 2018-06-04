'use strict';
//NOTE this file will be used for foreign key pairings in future applications

module.exports = (sequelize, DataTypes) => {
  var SoundFile = sequelize.define('SoundFile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
  SoundFile.associate = function(models) {
    // associations can be defined here
  };
  return SoundFile;
};
