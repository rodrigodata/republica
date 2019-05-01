/* */

async function conectarBancoDados(fastify) {
  fastify.register(require("fastify-mongoose"), {
    url: "mongodb://localhost:27017/republica",
    useNewUrlParser: true
  });
}

module.exports = conectarBancoDados;
