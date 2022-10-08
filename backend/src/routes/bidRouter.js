const Router = require('express');
const router = new Router();
const bidController = require('../controllers/bidController')

router.post('/', bidController.create)
router.get('/getbyuser/:userId', bidController.getAllByUserID)
router.get('/getbylot/:lotId', bidController.getAllByLotID)

module.exports = router;