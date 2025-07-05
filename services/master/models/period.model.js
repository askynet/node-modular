const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Periods = sequelize.define('Periods', {
        periodId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'periods',
        modelName: 'Periods',
        freezeTableName: true
    });

    return Periods;
};
