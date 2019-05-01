/* */
module.exports = async (fastify, options) => {
  fastify.register(require("./app/index"), { prefix: "/api" });
};
