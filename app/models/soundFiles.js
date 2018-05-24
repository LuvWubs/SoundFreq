module.exports = function(sequelize, DataTypes) {
  var SoundFile = sequelize.define("SoundFile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return SoundFile;
};
