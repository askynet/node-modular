const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const EvolutionTypes = sequelize.define('EvolutionTypes', {
        evolutionTypeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentId: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'evolution_types',
        modelName: 'EvolutionTypes',
        freezeTableName: true
    });

    return EvolutionTypes;
};
