const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  quantidade: { type: Number, required: true, min: 0 },
  foto: { type: String, required: true }, 
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
