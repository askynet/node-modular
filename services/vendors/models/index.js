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

const VENDORS = {};

VENDORS.Sequelize = Sequelize;
VENDORS.sequelize = sequelize;

VENDORS.Vendors = require('./vendor.model')(sequelize, Sequelize);

// make dynamic associations and this should be th last
Object.keys(VENDORS).forEach((modelName) => {
    const model = VENDORS[modelName];
    const associations = model.associations || [];

    if (!isArray(associations)) {
        return;
    }

    associations.forEach(association => {
        if (association.type === 'belongsTo') {
            const targetModel = VENDORS[association.target];
            if (targetModel) {
                model.belongsTo(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasMany') {
            const targetModel = VENDORS[association.target];
            if (targetModel) {
                model.hasMany(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasOne') {
            const targetModel = VENDORS[association.target];
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
            const targetModel = VENDORS[association.target];
            const throughModel = VENDORS[association.through];

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
// dont add any new line here
module.exports = { VENDORS }; 