const Router = require('express');
const router = new Router();
const bidController = require('../controllers/bidController')
const authMiddleware = require("../../middleware/authMiddleware.js");
const checkRole = require('../../middleware/checkRoleMiddleware')

router.post('/', bidController.create)
router.get('/getbyuser/:userId', authMiddleware, bidController.getAllByUserID)
router.get('/getbylot/:lotId', checkRole('ADMIN'), bidController.getAllByLotID)

module.exports = router;