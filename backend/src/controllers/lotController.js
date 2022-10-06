const uuid = require('uuid');
const path = require('path');
const {Lot} = require('../models/models')
const ApiError = require('../../error/ApiError')
class LotController {
    async create(req, res, next) {
        try {
            const {end_at, body_style, brand, model, engine_volume, power,
                mileage, fuel, drivetrain, transmission, color, steering_wheel,
                description, start_price, current_price, redemption_price, city, userId} = req.body
            const {img} = req.files
            
            let fileName
            let result = ''
            for(let item of img){
                fileName = uuid.v4() + ".jpg"
                item.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
                result += fileName + ' '
            }
            const lot = await Lot.create({end_at, body_style, brand, model, engine_volume, power,
                mileage, fuel, drivetrain, transmission, color, steering_wheel,
                description, start_price, current_price, redemption_price, city, img:result, userId})
            return res.json(lot)
        }
        catch(err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const lots = await Lot.findAndCountAll({limit, offset})
        return res.json(lots)
    }

    async getOne(req, res) {
        const {id} = req.params
        const lot = await Lot.findOne({where: {id}})
        return res.json(lot)
    }
}

module.exports = new LotController();