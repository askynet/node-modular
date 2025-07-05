const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Versions = sequelize.define('Versions', {
        versionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        buId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'versions',
        modelName: 'Versions',
        freezeTableName: true
    });

    return Versions;
};
