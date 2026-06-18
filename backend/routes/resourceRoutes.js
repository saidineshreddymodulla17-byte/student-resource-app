const express = require("express");
const multer = require("multer");

const {
  uploadResource,
  getResources,
  deleteResource,
} = require("../controllers/resourceController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("file"),
  uploadResource
);

router.get("/", getResources);

router.delete("/:id", deleteResource);

module.exports = router;