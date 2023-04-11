import { Router } from "express";
import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import db from "../database/db.js";

const router = Router();

router.post("/add", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  const sql = `INSERT INTO users (first_name, last_name, email, password, createdAt) 
  VALUES ("${first_name}", "${last_name}", "${email}", "${password}", NOW())`;
  db.sequelize.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
    req.flash("success", "Data added successfully!");
    res.redirect("/register");
  });
});

export default router;
