const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const EmailTemplates = sequelize.define('EmailTemplates', {
        templateId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        html: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        tableName: 'email_templates',
        modelName: 'EmailTemplates',
        freezeTableName: true
    });

    return EmailTemplates;
};
