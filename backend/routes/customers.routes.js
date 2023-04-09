import { Router } from "express";
import db from "../database/db.js";

const router = Router();

router.post("/add", (req, res) => {
  const c_name = req.body.c_name;
  const gender = req.body.gender;
  const amount = Number(req.body.amount);
  const loanTenure = Number(req.body.loanTenure);

  const sql = `INSERT INTO customers (c_name, gender, amount, loanTenure, createdAt) 
  VALUES ("${c_name}", "${gender}", "${amount}", "${loanTenure}", NOW())`;
  db.sequelize.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });
});

export default router;
