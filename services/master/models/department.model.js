const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Departments = sequelize.define('Departments', {
        deptId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'departments',
        modelName: 'Departments',
        freezeTableName: true
    });

    return Departments;
};
