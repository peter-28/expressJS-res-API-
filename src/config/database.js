const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Asdf1234",
  database: "express_js",
});

module.exports = dbPool.promise();
