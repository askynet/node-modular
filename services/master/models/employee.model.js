const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Employees = sequelize.define('Employees', {
        employeeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empType: {
            type: DataTypes.ENUM(["RECKIIT", "AGENT"]),
            defaultValue: "RECKIIT",
        },
        orgId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        deptId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM(["MALE", "FEMALE", "UNKNOWN", ""]),
            defaultValue: "",
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        isEmailVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isFirstLogin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        lastLoginAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        displayName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstName}${this.lastName ? " " + this.lastName : ""}`;
            },
        },
    }, {
        tableName: 'employees',
        modelName: 'Employees',
        freezeTableName: true,
        paranoid: true,
        deletedAt: "deletedAt",
        indexes: [
            {
                unique: true,
                fields: ['email'],
                name: 'emp_email'
            }
        ]
    });

    Employees.associations = [
        {
            type: 'hasOne',
            target: 'Departments',
            sourceKey: 'deptId',
            foreignKey: 'deptId',
            as: 'dept'
        },
        {
            type: 'hasOne',
            target: 'Org',
            sourceKey: 'orgId',
            foreignKey: 'orgId',
            as: 'org'
        },
        {
            type: 'hasOne',
            target: 'Roles',
            sourceKey: 'roleId',
            foreignKey: 'roleId',
            as: 'role'
        }
    ]
    return Employees;
};
