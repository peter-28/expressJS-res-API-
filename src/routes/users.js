const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

router.get("/", userController.index);
router.post("/", userController.create);

module.exports = router;
