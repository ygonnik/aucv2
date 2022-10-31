const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware.js");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/createmessage", userController.createMessage);
router.get("/auth", authMiddleware, userController.check)
router.get("/getchats/:userId", authMiddleware, userController.getMessages)
router.get("/getnicknames", authMiddleware, userController.getNicknames)
module.exports = router;