const sequelize = require('../../db/db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    email: {type: DataTypes.STRING, unique: true,},
    nickname: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Message = sequelize.define('message', {
    send_at: {type: DataTypes.DATE},
    content: {type: DataTypes.STRING, defaultValue: DataTypes.NOW,},
})

const Lot = sequelize.define('lot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    end_at: {type: DataTypes.DATE, allowNull: false},
    body_style: {type: DataTypes.STRING, allowNull: false},
    brand: {type: DataTypes.STRING, allowNull: false},
    model: {type: DataTypes.STRING, allowNull: false},
    engine_volume: {type: DataTypes.INTEGER, allowNull: false},
    power: {type: DataTypes.INTEGER, allowNull: false},
    mileage: {type: DataTypes.INTEGER, allowNull: false},
    fuel: {type: DataTypes.STRING, allowNull: false},
    drivetrain: {type: DataTypes.STRING, allowNull: false},
    transmission: {type: DataTypes.STRING, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    steering_wheel: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    start_price: {type: DataTypes.INTEGER, allowNull: false},
    redemption_price: {type: DataTypes.INTEGER, allowNull: true},
    city: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
})

const Bid = sequelize.define('bid', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasMany(Message, {as: 'user1', foreignKey: 'user1Id'})
User.hasMany(Message, {as: 'user2', foreignKey: 'user2Id'})

User.hasMany(Lot)
Lot.belongsTo(User)

User.hasMany(Bid)
Bid.belongsTo(User)

Lot.hasMany(Bid)
Bid.belongsTo(Lot)

module.exports = {
    User,
    Message,
    Lot,
    Bid
}
