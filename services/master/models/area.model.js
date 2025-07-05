const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Area = sequelize.define('Area', {
        areaId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        tableName: 'area',
        modelName: 'Area',
        freezeTableName: true
    });

    Area.associations = [
        {
            type: 'hasOne',
            target: 'Countries',
            sourceKey: 'countryId',
            foreignKey: 'countryId',
            as: 'country'
        }
    ]
    return Area;
};
