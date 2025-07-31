// core modules 
const express = require('express');
const storeController = require('../controllers/storeController'); // Importing the controller

const storeRouter = express.Router();   

storeRouter.get('/', storeController.getHome); // Use the controller method for handling the route

module.exports = storeRouter;