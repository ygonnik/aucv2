const ApiError = require('../../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

function generateJWT(id, email, nickname, role) {
    return jwt.sign(
        {id, email, nickname, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}
class UserController {
    async registration(req, res, next) {
        const {email, nickname, password, role} = req.body
        if (!email || !nickname || !password) {
            return next(ApiError.badRequest('Некорректный email or nickname or password'));
        }
        const emailFlag = await User.findOne({where: {email}})
        const nicknameFlag = await User.findOne({where: {nickname}})
        if (emailFlag && nicknameFlag) {
            return next(ApiError.badRequest('Пользователь с таким email и nickname уже существует'));
        }
        else if (!emailFlag && nicknameFlag) {
            return next(ApiError.badRequest('Пользователь с таким nickname уже существует'));
        }
        else if (emailFlag && !nicknameFlag) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({role, email, nickname, password: hashPassword});
        const token = generateJWT(user.id, user.email, user.nickname, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJWT(user.id, user.email, user.nickname, user.role)
        return res.json({token})
    }

    async check(req, res, next) {

    }

    async getMessages(req, res) {
        
    }
}

module.exports = new UserController();