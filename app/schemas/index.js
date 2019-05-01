/* Importação de Schemas */
const { OBJETO, BUSCAR } = require("./morador/Morador");

module.exports = {
  MORADOR: {
    ...OBJETO,
    ...BUSCAR
  }
};
