const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const RolePermissions = sequelize.define('RolePermissions', {
        rpId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'role_permissions',
        modelName: 'RolePermissions',
        freezeTableName: true
    });

    RolePermissions.associations = [
        {
            type: 'hasOne',
            target: 'Roles',
            sourceKey: 'roleId',
            foreignKey: 'roleId',
            as: 'role'
        },
        {
            type: 'hasOne',
            target: 'Roles',
            sourceKey: 'permissionId',
            foreignKey: 'permissionId',
            as: 'permission'
        }
    ]

    return RolePermissions;
};
