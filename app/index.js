"use strict";

/* Registramos o arquivo ROUTES por versão de endpoint. */
module.exports = async (fastify, options) => {
  fastify.register(require("./routes/v1"), { prefix: "/v1" });
};
