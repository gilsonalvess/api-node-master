const express = require('express');
const server = express();
const config = require('./app.config');
const bodyParser = require('body-parser');
const queryParser = require('express-query-int');
const router = require('./routes');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(queryParser());
server.use('/api',router);

server.listen(config.app.port, () =>{
    console.log(`Server is runing in port ${config.app.port}`);
});

module.exports = server;