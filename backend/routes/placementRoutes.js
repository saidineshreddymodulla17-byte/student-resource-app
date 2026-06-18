const express = require("express");

const {
  addExperience,
  getExperiences,
} = require("../controllers/placementController");

const router = express.Router();

router.post("/", addExperience);

router.get("/", getExperiences);

module.exports = router;