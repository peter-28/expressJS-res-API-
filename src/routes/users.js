const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

router.get("/", userController.index);
router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/destroy/:id", userController.destroy);

module.exports = router;
