const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Vendors = sequelize.define('Vendors', {
        vendorsId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        buId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        countryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        scorecard: {
            type: DataTypes.STRING,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        tableName: 'vendors',
        modelName: 'Vendors',
        freezeTableName: true
    });
    return Vendors;
};
