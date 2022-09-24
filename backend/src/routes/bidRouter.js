const Router = require('express');
const router = new Router();
const bidController = require('../controllers/bidController')

router.post('/', bidController.create)
router.get('/', bidController.getAll)

module.exports = router;