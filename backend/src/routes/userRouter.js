const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware.js");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check)
router.get("/getchats/:user1Id", authMiddleware, userController.getMessages)
module.exports = router;