const { Sequelize } = require('sequelize');

const name = 'minicurso';
const user = 'root';
const password = '12345';
const host_name = 'localhost';
const dialect = 'mysql';

const connection = new Sequelize(name, user, password, {
    host: host_name,
    dialect: dialect
});

module.exports = connection;