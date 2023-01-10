const mongoose = require('mongoose');

const ClientDataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereço: String,
    cpf: String,
});

module.exports = mongoose.model('ClientData', ClientDataSchema);