const express = require("express");
const router = express.Router();
const customerController = require("../controller/customers");

router.get("/", customerController.index);
router.post("/", customerController.create);

module.exports = router;
