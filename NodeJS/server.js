const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Inicia o app
const app = express();
//Inicia o banco
mongoose.connect('mongodb+srv://lucasomac:67592318@cluster0-5c5hx.mongodb.net/node?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models/');
const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));
app.listen(3001);