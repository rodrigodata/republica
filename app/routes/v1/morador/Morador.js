/* Importação de Controllers */
const MoradorController = require("../../../controllers/morador/Morador");

/* Importação de Schemas aplicação */
const { MORADOR } = require("../schemas");

/* Registramos todas as rotas dentro da V1 de nossa API. */
module.exports = async (fastify, options) => {
  fastify.get("/", { schema: MORADOR.BUSCAR }, MoradorController);
};
