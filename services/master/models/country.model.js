const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Countries = sequelize.define('Countries', {
        countryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'countries',
        modelName: 'Countries',
        freezeTableName: true
    });

    return Countries;
};
