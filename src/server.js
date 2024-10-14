require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const middlewareLog = require("./middleware/logs");
const userRoutes = require("./routes/users");
const customerRoutes = require("./routes/customers");

const app = express();
app.use(express.json());

app.use(middlewareLog);
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
