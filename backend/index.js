import express from "express";
import cors from "cors";
import db from "./database/db.js";

// import  routes
import profileRouter from "./routes/profile.js";
import customerRouter from "./routes/customers.js";
import contactRouter from "./routes/contact.routes.js";

const app = express();
const port = db.PORT || 3081;

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

// use routes
app.use("/customers", customerRouter);
app.use("/profile", profileRouter);
app.use("/contact", contactRouter);

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
