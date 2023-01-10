const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')

//Rotas de User
routes.get('/users', UserController.listAll);

//Rotas de Client


module.exports = routes;