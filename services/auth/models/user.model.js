const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('Users', {
        userId: {
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
        phone: {
            type: DataTypes.STRING,
        },
        countryCode: {
            type: DataTypes.STRING,
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
        isPhoneVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isSuperAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isAdmin: {
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
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        defaultUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        displayName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstName}${this.lastName ? " " + this.lastName : ""}`;
            },
        },
    }, {
        tableName: 'users',
        modelName: 'Users',
        freezeTableName: true,
        paranoid: true,
        deletedAt: "deletedAt",
        indexes: [
            {
                unique: true,
                fields: ['email'],
                name: 'user_email'
            }
        ]
    });

    return Users;
};
