const express = require('express');

const routes = express.Router();

//Rotas
routes.get('/', (req, res) => {
    Product.create({
        title: 'React Native', description: 'Curso React', url: 'https://github.com/facebook/react-native',
    });
    return res.send('Hello Word');
});

module.exports = routes;