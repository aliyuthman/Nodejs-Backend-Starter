const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
const userRouter = require("./routes/userController");

app.use(express.json());
app.use("/home", userRouter);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
