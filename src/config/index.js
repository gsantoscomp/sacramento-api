module.exports = {
    app : {
        port: process.env.port || 4000
    },
    db : {
        connectionString : process.env.dbconnection || 'postgres://postgres:postgres@localhost:5432/postgres'
    }
};