const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Org = sequelize.define('Org', {
        orgId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        domains: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        }
    }, {
        tableName: 'org',
        modelName: 'Org',
        freezeTableName: true
    });

    return Org;
};
