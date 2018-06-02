'use strict';
// these are not needed???
var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");
module.exports = (sequelize, DataTypes) => {
  var SoundFile = sequelize.define('SoundFile', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }

  // }, {});
  // SoundFile.associate = function(models) {
  //   // associations can be defined here
  //   SoundFile.create({name: 'test', file: 'test.jpg'}).then(console.log('updated db');)
});
  return SoundFile;
};

// User.bulkCreate([
//   { username: 'barfooz', isAdmin: true },
//   { username: 'foo', isAdmin: true },
//   { username: 'bar', isAdmin: false }
// ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
//   return User.findAll();
// }).then(users => {
//   console.log(users) // ... in order to get the array of user objects
// })
