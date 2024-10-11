const express = require("express");
const middlewareLog = require("./middleware/logs");
const userRoutes = require("./routes/users");
const customerRoutes = require("./routes/customers");

const app = express();

app.use(middlewareLog);
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
