// core modules 
const express = require('express');

const { registeredHomes } = require('./hostRouter'); // Importing registeredHomes from hostRouter

const storeRouter = express.Router();   

storeRouter.get('/', (req, res, next) => {
    console.log(registeredHomes);
    res.render('index', { homes: registeredHomes, pageTitle: 'apka Air BNB' }); // Render index.ejs with homes data
    // res.sendFile(path.join(rootDir,"views", "index.ejs"));
});

module.exports = storeRouter;