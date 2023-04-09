import { Router } from "express";

import db from "../db.js";

const router = Router();

router.post("/add", (req, res) => {
  const c_name = req.body.c_name;
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const message = req.body.message;

  const sql = `INSERT INTO contacts (c_name, email, mobileNumber, message, createdAt) 
  VALUES ("${c_name}", "${email}", "${mobileNumber}", "${message}", NOW())`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
    // req.flash("success", "Data added successfully!");
    // res.redirect("/");
  });
});

export default router;
