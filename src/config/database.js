require('dotenv').config();

module.exports = {
    "development": {
      "connectionstring": process.env.DEV_DB_CONN,
      "username": process.env.DEV_DB_USERNAME || "postgres",
      "password": process.env.DEV_DB_PASS || "postgres",
      "database": process.env.DEV_DB_DATABASE || "teste",
      "host": process.env.DEV_DB_HOST || "localhost",
      "dialect": process.env.DEV_DB_DIALECT || "postgres"
    },
    "test": {
      "connectionstring": process.env.TEST_DB_CONN || "postgres://postgres:postgres@localhost:5432/postgres",
      "username": process.env.TEST_DB_USERNAME || "root",
      "password": process.env.TEST_DB_PASS || null,
      "database": process.env.TEST_DB_DATABASE || "database_development",
      "host": process.env.TEST_DB_HOST || "127.0.0.1",
      "dialect": process.env.TEST_DB_DIALECT || "mysql"
    },
    "production": {
      "connectionstring": process.env.PROD_DB_CONN || "postgres://postgres:postgres@localhost:5432/postgres",
      "username": process.env.PROD_DB_USERNAME || "root",
      "password": process.env.PROD_DB_PASS || null,
      "database": process.env.PROD_DB_DATABASE || "database_development",
      "host": process.env.PROD_DB_HOST || "127.0.0.1",
      "dialect": process.env.PROD_DB_DIALECT || "mysql"
    }
  }