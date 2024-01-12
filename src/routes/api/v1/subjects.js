const express = require("express");
const router = express.Router();

const SubjectsController = require("../../../controllers/SubjectsController");
const subjectsController = new SubjectsController();

router.get("/", subjectsController.all.bind(subjectsController));

module.exports = router;
