const express = require("express");
const router = express.Router();
const customerController = require("../controller/customers");

router.get("/", customerController.index);
router.post("/create", customerController.create);
router.put("/update/:id", customerController.update);
router.delete("/destroy/:id", customerController.destroy);

module.exports = router;
