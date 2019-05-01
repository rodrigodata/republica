const OBJETO = {
  type: "object",
  properties: {
    _id: { type: "string" },
    morador: {
      type: "object",
      properties: {
        _id: { type: "string" },
        nome: { type: "string" }
      }
    }
  }
};

const BUSCAR = {
  response: {
    200: {
      type: "array",
      items: OBJETO
    }
  }
};

module.exports = {
  OBJETO,
  BUSCAR
};
