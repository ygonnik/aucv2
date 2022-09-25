const uuid = require('uuid');
const path = require('path');
const {Lot} = require('../models/models')
const ApiError = require('../../error/ApiError')
class LotController {
    async create(req, res, next) {
        try {
            const {end_at, body_style, brand, model, engine_volume, power,
                mileage, fuel, drivetrain, transmission, color, steering_wheel,
                description, start_price, current_price, redemption_price, city} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const lot = await Lot.create({end_at, body_style, brand, model, engine_volume, power,
                mileage, fuel, drivetrain, transmission, color, steering_wheel,
                description, start_price, current_price, redemption_price, city, img:fileName})
            return res.json(lot)
        }
        catch(err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res) {
        const {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        offset = page * limit - limit
        const bids = await Lot.findAndCountAll({limit, offset})
        return res.json(bids)
    }

    async getOne(req, res) {
        const {id} = req.params
        const lot = await Lot.findOne({where: {id}})
        return res.json(lot)
    }
}

module.exports = new LotController();