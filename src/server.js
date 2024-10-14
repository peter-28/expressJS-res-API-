require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const middlewareLog = require("./middleware/logs");
const userRoutes = require("./routes/users");
const customerRoutes = require("./routes/customers");
const upload = require("./middleware/multer");

const app = express();
app.use(express.json());

app.use(middlewareLog);
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);

// static file image express
app.use("/assets", express.static("public/images"));
app.use("/assets", express.static("public/photos"));

app.post("/upload", upload.single("images"), (req, res) => {
  res.json({
    message: "Upload image successfully",
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
