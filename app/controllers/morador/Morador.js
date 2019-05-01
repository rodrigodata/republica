/* Handler para endpoint GET /api/v1/morador */
const BUSCAR_MORADOR = async (req, res, next) => {
  return [{ morador: { _id: "1", nome: "John doe" } }];
};

module.exports = BUSCAR_MORADOR;
