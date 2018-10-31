const config = {
    app:{
        port: 3002,
    },
    db:{
        host:'mongodb://localhost:27017',
        port:'27017',
        name:'/pessoas'
    },
    apiExames:{
        baseURL: 'http://localhost:9003/api/exames',
    }
}

module.exports = config;