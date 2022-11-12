const Router = require('express');
const router = new Router();
const lotController = require('../controllers/lotController')
const checkRole = require('../../middleware/checkRoleMiddleware');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/', authMiddleware, lotController.create)
router.patch('/:id', checkRole('ADMIN'), lotController.changeApproved)
router.get('/', lotController.getAll)
router.get('/:id', lotController.getOne)

module.exports = router;