const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

exports.login = (req, res) => {
  const { username } = req.body;
  const sql = "SELECT * FROM users WHERE username=?";
  db.query(sql, [username], (err, data) => {
    if (err) return res.status(500).json({ status: "error", error: err });
    if (!data.length)
      return res
        .status(404)
        .json({ status: "fail", message: "Invalid username or password" });

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res
        .status(404)
        .json({ status: "fail", message: "Invalid username or password" });
    let { password, ...others } = data[0];
    const token = jwt.sign({ id: data[0].id }, "secretkey");
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json({
        status: "success",
        message: "login success",
        data: { user: others },
      });
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie("accessToken")
    .status(200)
    .json({ status: "success", message: "logout success" });
};
