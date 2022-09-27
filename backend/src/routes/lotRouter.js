const Router = require('express');
const router = new Router();
const lotController = require('../controllers/lotController')
const checkRole = require('../../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), lotController.create)
router.get('/', lotController.getAll)
router.get('/:id', lotController.getOne)

module.exports = router;