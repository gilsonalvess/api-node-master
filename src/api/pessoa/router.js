const service = require('./pessoaService');

module.exports = (router) => {
    
    router.post('/', service.post);
    router.put('/:cpf', service.put);
    router.delete('/:cpf', service.delete);
    router.get('/pessoas', service.getAll);
    router.get('/:cpf', service.get);
    router.get('/pessoas/teste/:cpf',service.teste)

    return router;
}