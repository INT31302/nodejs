var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "427549",
  database: "opentutorials",
});
db.connect();

module.exports = db;
