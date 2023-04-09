import { Router } from "express";
import Customer from "../models/customer.js";
const router = Router();

// fetch route
router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const c_name = req.body.c_name;
  const gender = req.body.gender;
  const amount = Number(req.body.amount);
  const loanTenure = Number(req.body.loanTenure);

  const newCustomer = new Customer({
    c_name,
    gender,
    amount,
    loanTenure,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Customer.findById(req.params.id)
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
