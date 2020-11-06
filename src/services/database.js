const { Sequelize } = require('sequelize');
const { db } = require('@config');

const sequelize = new Sequelize(db.connectionString, {
    logging: false
});  


module.exports = sequelize;