const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { registerValidation, loginValidation } = require("../validators/authValidator");

const router = express.Router();

// Register with validation
router.post("/register", registerValidation, validate, registerUser);

// Login with validation
router.post("/login", loginValidation, validate, loginUser);

// Protected route
router.get("/me", protect, getMe);

module.exports = router;
