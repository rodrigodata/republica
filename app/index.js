"use strict";

/* Importação de Controllers */
const MoradorController = require("./controllers/morador/Morador");

/* Importação de Schemas aplicação */
const { MORADOR } = require("./schemas");

module.exports = async function(fastify) {
  fastify.get("/", { schema: MORADOR.BUSCAR }, MoradorController);
};
