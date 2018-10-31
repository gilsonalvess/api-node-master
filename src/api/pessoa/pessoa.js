var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pessoa = new Schema({
    nome: String,
    nascimento: {type: Date},
    cpf: String,
    email: String
})

module.exports = mongoose.model('Pessoa',pessoa);