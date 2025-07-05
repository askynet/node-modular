const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const BU = sequelize.define('BU', {
        buId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'bu',
        modelName: 'BU',
        freezeTableName: true
    });

    return BU;
};
