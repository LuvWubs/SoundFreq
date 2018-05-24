var Sequelize = require("sequelize");

var sequelize = new Sequelize("soundfreq", "root", "", {
  host: "localhost",
  port: 8080,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
