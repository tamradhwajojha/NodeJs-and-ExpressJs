
const bodyParser = require('body-parser');
const express = require('express');
const hostRouter = express.Router();



const registeredHomes = [];
hostRouter.get('/add-home', (req, res, next) => {
    res.render('add-home', {pageTitle: 'add home'});
}); 
hostRouter.post('/add-home', (req, res, next) => {
    registeredHomes.push(req.body);
    res.render('home-added', {pageTitle: 'home added'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
