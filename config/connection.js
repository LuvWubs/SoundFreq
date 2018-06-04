var Sequelize = require("sequelize");
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "localhost",
      user: 'root',
      password: '',
      database: 'soundDB'
  });
  // connection = new Sequelize("soundDB", "root", "", {
  //   host: "localhost",
  //   port: 3306,
  //   dialect: "mysql",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000
  //   }
  // });
};

connection.connect();
module.exports = connection;
