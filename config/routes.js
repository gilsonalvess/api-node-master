const router = require('express').Router();
const routerPessoas = require('../src/api/pessoa/router')(router);
router.use('/pessoas',routerPessoas);

module.exports = router;
