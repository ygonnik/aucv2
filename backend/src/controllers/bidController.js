const {Bid} = require('../models/models')
const ApiError = require('../../error/ApiError')
class BidController {
    async create(req, res) {
        const {userId, lotId, price} = req.body
        const bid = await Bid.create({userId, lotId, price})
        return res.json(bid)
    }

    async getAll(req, res) {
        const {userId} = req.params
        const bids = await Bid.findAll({where: {userId}})
        return res.json(bids)
    }
}

module.exports = new BidController();