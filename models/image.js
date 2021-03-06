const Sequelize = require('sequelize');
const database = require('./connect');
const relativeDate = require('relative-date');

module.exports = database.define('image', {
    imageId: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: "MEDIUMBLOB",
        allowNull: false,
        get() {
            return Buffer.from(this.getDataValue('content')).toString('base64');
        }
    },
    category: {
        type: Sequelize.INTEGER(4),
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    views: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
    },
    likes: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0'
    },
    createdAt: {
        type: Sequelize.DATE,
        get() {
            return relativeDate(this.getDataValue('createdAt'));
        }
    },
}, {
    tableName: 'image',
    freezeTableName: true,
    timestamps: false
});
