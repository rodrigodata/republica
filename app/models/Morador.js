/* Importação de dependencias */
const Mongoose = require("mongoose");

const MoradorSchema = new Mongoose.Schema({
  nome: {
    type: String,
    require: [true, "não pode ser vazio"]
  }
});

Mongoose.model("Morador", MoradorSchema);
