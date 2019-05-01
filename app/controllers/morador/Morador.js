const BUSCAR_MORADOR = async (req, res, next) => {
  console.log("\nAQUI!!!");
  return [{ _id: "123", morador: { _id: "456", nome: "John doe" } }];
};

module.exports = BUSCAR_MORADOR;
