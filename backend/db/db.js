const {Sequelize}  = require('sequelize');
module.exports = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        // dialectOptions: {
        //     ssl: {
        //         rejectUnauthorized: false
        //     }
        // },
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORTDB_PORT
    }
)