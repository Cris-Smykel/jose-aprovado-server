const express = require("express");
const app = express();

const userRouter = require("./routes/api/v1/user");

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.listen(5000, () => {
  return;
});
