const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_auth",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected successfully");
});

module.exports = db;
