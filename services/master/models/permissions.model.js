const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Permissions = sequelize.define('Permissions', {
        permissionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        module: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permission: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        method: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'permissions',
        modelName: 'Permissions',
        freezeTableName: true
    });

    return Permissions;
};
