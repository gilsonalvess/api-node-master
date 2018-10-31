const Pessoa = require('./pessoa');
var rp = require('request-promise');
var config = require('../../../config/app.config');

const service = {
    post:(req, res, next) => {
        var pessoa = new Pessoa(req.body);
        pessoa.save().then(r => {
            res.send(r);
        });
    },
    put:(req, res, next) => {
        var cpf = req.params.cpf;
        Pessoa.findOneAndUpdate({cpf: cpf}, req.body,{new: false},
             (err, todo) => {
                // Handle any possible database errors
                if (err) return res.status(500).send(err);
                Pessoa.find({cpf: cpf}).exec().then(r => {
                    res.send(r);
                })
             }
         )
    },
    delete:(req, res, next) => {
        var cpf = req.params.cpf;
        Pessoa.remove({cpf: cpf}).then(r =>{
            res.send(r);
        })
    },
    getAll:(req, res, next) => {
        Pessoa.find().exec().then(r => {
            res.send(r);
        })
    },
    get:(req, res, next) => {
        var cpf = req.params.cpf;
        Pessoa.find({cpf: cpf}).exec().then(r => {
            res.send(r);
        })
    },
    teste:(req, res, next) => {
        var cpf = req.params.cpf;
        var pessoa = Pessoa.find({cpf: cpf})
        console.log(pessoa);
       rp.get(config.apiExames.baseURL + '/paciente/' + cpf)
         .then(r => {
            res.send(r);
         })
         .catch(error =>{
            res.send(error);
         });
    }
};

module.exports = service;