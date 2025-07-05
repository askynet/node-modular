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

const MASTERS = {};

MASTERS.Sequelize = Sequelize;
MASTERS.sequelize = sequelize;

MASTERS.Countries = require('./country.model')(sequelize, Sequelize);
MASTERS.Categories = require('./category.model')(sequelize, Sequelize);
MASTERS.Area = require('./area.model')(sequelize, Sequelize);
MASTERS.Brands = require('./brand.model')(sequelize, Sequelize);
MASTERS.BU = require('./bu.model')(sequelize, Sequelize);
MASTERS.Depts = require('./department.model')(sequelize, Sequelize);
MASTERS.EmailTemplates = require('./email-templates.model')(sequelize, Sequelize);
MASTERS.Employees = require('./employee.model')(sequelize, Sequelize);
MASTERS.EvolutionTypes = require('./evolution-types.model')(sequelize, Sequelize);
MASTERS.Orgs = require('./org.model')(sequelize, Sequelize);
MASTERS.Periods = require('./period.model')(sequelize, Sequelize);
MASTERS.ReviewTypes = require('./review-types.model')(sequelize, Sequelize);
MASTERS.Permissions = require('./permissions.model')(sequelize, Sequelize);
MASTERS.Roles = require('./roles.model')(sequelize, Sequelize);
MASTERS.RolePermissions = require('./role-permissions.model')(sequelize, Sequelize);
MASTERS.Versions = require('./version.model')(sequelize, Sequelize);
MASTERS.Years = require('./year.model')(sequelize, Sequelize);

// make dynamic associations and this should be th last
Object.keys(ERP).forEach((modelName) => {
    const model = ERP[modelName];
    const associations = model.associations || [];

    if (!isArray(associations)) {
        return;
    }

    associations.forEach(association => {
        if (association.type === 'belongsTo') {
            const targetModel = ERP[association.target];
            if (targetModel) {
                model.belongsTo(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasMany') {
            const targetModel = ERP[association.target];
            if (targetModel) {
                model.hasMany(targetModel, {
                    as: association.as,
                    sourceKey: association.sourceKey,
                    foreignKey: association.foreignKey,
                    constraints: association.constraints
                });
            }
        } else if (association.type === 'hasOne') {
            const targetModel = ERP[association.target];
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
            const targetModel = ERP[association.target];
            const throughModel = ERP[association.through];

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

module.exports = { MASTERS, sequelize };