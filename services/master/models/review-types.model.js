const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ReviewTypes = sequelize.define('ReviewTypes', {
        reviewTypeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        templateId: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'review_types',
        modelName: 'ReviewTypes',
        freezeTableName: true
    });

    ReviewTypes.associations = [
        {
            type: 'hasOne',
            target: 'Emailtemplates',
            sourceKey: 'templateId',
            foreignKey: 'templateId',
            as: 'template'
        }
    ]

    return ReviewTypes;
};
