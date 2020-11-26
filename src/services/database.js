const { Sequelize } = require('sequelize');
const { production, development, test } = require('@config/database.js');

const environment = process.env.NODE_ENV || 'development';

let database = development;
if (environment == 'production') {
    database = production;
} else if (environment == 'test') {
    database = test;
}

const sequelize = new Sequelize(database.connectionstring, {
    logging: false
});  


module.exports = sequelize;