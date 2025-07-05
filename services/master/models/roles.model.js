const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Roles = sequelize.define('Roles', {
        roleId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'roles',
        modelName: 'Roles',
        freezeTableName: true
    });

    return Roles;
};
