const express = require("express");
const router = express.Router();
const UsersController = require("../../../controllers/UsersController");

const userController = new UsersController();

router.post("/", userController.authUser.bind(userController));
router.get("/check-logged", userController.checkLogged.bind(userController));

module.exports = router;
