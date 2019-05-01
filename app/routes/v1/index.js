/* Registramos todas as rotas dentro da V1 de nossa API. */
module.exports = async (fastify, options) => {
  fastify.register(require("./morador/Morador"), { prefix: "/morador" });
};
