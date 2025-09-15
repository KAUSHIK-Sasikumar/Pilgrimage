const express = require("express");
const {
  createTemple,
  getTemples,
  getTempleById,
  updateTemple,
  deleteTemple,
} = require("../controllers/templeController");

const router = express.Router();

// Routes
router.post("/", createTemple);
router.get("/", getTemples);
router.get("/:id", getTempleById);
router.put("/:id", updateTemple);
router.delete("/:id", deleteTemple);

module.exports = router;
