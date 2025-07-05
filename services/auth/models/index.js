const { isArray } = require('lodash');
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


// make dynamic associations and this should be th last
Object.keys(AUTH).forEach((modelName) => {
    const model = AUTH[modelName];
    const associations = model.associations || [];

    if (!isArray(associations)) {
        return;
    }

    associations.forEach(association => {
        if (association.type === 'belongsTo') {
            const targetModel = AUTH[association.target];
            if (targetModel) {
                model.belongsTo(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasMany') {
            const targetModel = AUTH[association.target];
            if (targetModel) {
                model.hasMany(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasOne') {
            const targetModel = AUTH[association.target];
            if (targetModel) {
                model.hasOne(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        }
        else if (association.type === 'belongsToMany') {
            const targetModel = AUTH[association.target];
            const throughModel = AUTH[association.through];

            if (targetModel) {
                model.belongsToMany(targetModel, {
                    through: throughModel,
                    foreignKey: association.foreignKey,
                    otherKey: association.otherKey,
                    as: association.as,
                    constraints: association.constraints
                });
            }
        }
    });
})
module.exports = { AUTH }