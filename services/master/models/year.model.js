const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Years = sequelize.define('Years', {
        yearId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'years',
        modelName: 'Years',
        freezeTableName: true
    });

    return Years;
};
