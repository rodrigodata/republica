/* Handler para endpoint GET /api/v1/morador */
const BUSCAR_MORADOR = async (req, res, next) => {
  return [{ _id: "123", morador: { _id: "456", nome: "John doe" } }];
};

module.exports = BUSCAR_MORADOR;
