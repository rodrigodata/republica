/* Importação de dependencias */
const FP = require("fastify-plugin");

/* Importação de configuração do banco de dados */
const DB = require("./database");

/* Importação dos models */
require("./app/models");

module.exports = async (fastify, options) => {
  fastify.register(FP(DB)).register(require("./app/index"), { prefix: "/api" });
};
