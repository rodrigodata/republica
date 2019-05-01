module.exports = async function(fastify, options) {
  fastify.register(require("./app/index"), { prefix: "/api/morador" });
};
