'use strict';
// these are not needed???
// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");
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
