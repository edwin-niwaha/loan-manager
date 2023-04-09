import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// import  routes
import userRouter from "./routes/user.routes.js";
import customerRouter from "./routes/customers.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

const url = process.env.DB_URI;
await mongoose
  .connect(url)
  .then(() => console.log(`MongoDB connection established.`))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

// use routes
app.use("/customers", customerRouter);
app.use("/users", userRouter);

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
  console.log(`listening on port: ${port}`);
});
