const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");
app.use(
  session({
    secret: secretKey, // Change this to a secure secret
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 3600000, // Session duration in milliseconds (1 hour in this example)
    },
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const userRouter = require("./routes/api/v1/user");
app.use("/api/v1/user", userRouter);

const subjectsRouter = require("./routes/api/v1/subjects");
app.use("/api/v1/subjects", subjectsRouter);

app.listen(5000, () => {
  return;
});
