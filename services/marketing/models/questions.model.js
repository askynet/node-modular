const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Questions = sequelize.define('Questions', {
        questionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reviewTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        evolutionTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        countryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        versionId: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
        },
        desc: {
            type: DataTypes.TEXT,
        },
        ratings: {
            type: DataTypes.INTEGER,
        },
        isCompulsary: {
            type: DataTypes.BOOLEAN,
        },
        showCommentsIfRationLessThan: {
            type: DataTypes.INTEGER,
        },
        comment: {
            type: DataTypes.TEXT,
        }
    }, {
        tableName: 'questions',
        modelName: 'Questions',
        freezeTableName: true
    });

    // Questions.associations = [
    //     {
    //         type: 'hasOne',
    //         target: 'Countries',
    //         sourceKey: 'countryId',
    //         foreignKey: 'countryId',
    //         as: 'country',
    //         constraints: false
    //     }
    // ]
    return Questions;
};
