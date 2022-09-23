const Router = require('express');
const router = new Router();
const bidRouter = require('./bidRouter')
const lotRouter = require('./lotRouter')
const messageRouter = require('./messageRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/lot', lotRouter)
router.use('/message', messageRouter)
router.use('/bid', bidRouter)

module.exports = router;