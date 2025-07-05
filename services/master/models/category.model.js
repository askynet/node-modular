const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Categories = sequelize.define('Categories', {
        categoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'categories',
        modelName: 'Categories',
        freezeTableName: true
    });

    return Categories;
};
