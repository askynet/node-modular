const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    }
);

const AUTH = {};

AUTH.Sequelize = Sequelize;
AUTH.sequelize = sequelize;

AUTH.Users = require('./user.model')(sequelize, Sequelize);


module.exports = { AUTH, sequelize }