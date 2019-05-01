"use strict";

/* Importação de Controllers */
const MoradorController = require("./controllers/morador/Morador");

/* Importação de Schemas aplicação */
const { MORADOR } = require("./schemas");

module.exports = async (fastify, options) => {
  fastify.get("/", { schema: MORADOR.BUSCAR }, MoradorController);
};
