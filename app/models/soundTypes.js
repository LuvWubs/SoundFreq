module.exports = function(sequelize, DataTypes) {
  var SoundType = sequelize.define("SoundType", {
    name: {
      type: DataTypes.STRING,
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
  return SoundType;
};
