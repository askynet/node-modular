const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    const Brands = sequelize.define('Brands', {
        brandId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        buId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        segament: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notPowerBranWhere: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        effectiveDate: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        tableName: 'brands',
        modelName: 'Brands',
        freezeTableName: true
    });

    Brands.associations = [
        {
            type: 'hasOne',
            target: 'BU',
            sourceKey: 'buId',
            foreignKey: 'buId',
            as: 'bu'
        },
        {
            type: 'hasOne',
            target: 'Categories',
            sourceKey: 'categoryId',
            foreignKey: 'categoryId',
            as: 'category'
        }
    ]

    return Brands;
};
