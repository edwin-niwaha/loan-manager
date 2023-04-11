import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

// import  routes
import uploadRouter from "./routes/upload.js";
import customerRouter from "./routes/customers.routes.js";
import contactRouter from "./routes/contact.routes.js";
import userRouter from "./routes/Users.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3081;

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

// use routes
app.use("/customer", customerRouter);
app.use("/upload", uploadRouter);
app.use("/contact", contactRouter);
app.use("/register", userRouter);

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
  console.log(`Server is running on port: ${port}`);
});
