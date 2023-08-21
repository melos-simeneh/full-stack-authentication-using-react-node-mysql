const db = require("../config/db");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  const sql = "SELECT * FROM users where username=?";
  db.query(sql, [username], (err, data) => {
    if (err) return res.status(500).json({ status: "error", error: err });
    if (data.length)
      return res
        .status(409)
        .json({ status: "fail", message: "Username is already taken" });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const sql =
      "INSERT INTO users (first_name,last_name,username,password) VALUES (?)";
    const values = [first_name, last_name, username, hashedPassword];

    db.query(sql, [values], (err, result) => {
      if (err) return res.status(500).json({ status: "error", error: err });
      const { hashedPassword, ...others } = req.body;
      res.status(201).json({
        status: "success",
        message: "User created",
        data: { user: { id: result.insertId, ...others } },
      });
    });
  });
};
