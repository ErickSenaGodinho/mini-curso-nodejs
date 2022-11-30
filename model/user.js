const { Sequelize, DataTypes } = require('sequelize');
const conexao = require('../database');

const Usuario = conexao.define(
    "Usuario",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING
        }
    }
)

module.exports = Usuario;