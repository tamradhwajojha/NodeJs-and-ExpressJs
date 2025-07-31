const Home = require('../models/Home'); // Importing registeredHomes from Home model

exports.getAddHome = (req, res, next) => {
    res.render('add-home', {pageTitle: 'add home'});
}

exports.postAddHome = (req, res, next) => {
    console.log(req.body);
    const {houseName, price, location, rating, photo} = req.body; // Destructuring the request body to get home details
    const newHome = new Home(houseName,price,location,rating,photo); // Create a new instance of Home with the provided data 
    newHome.save(error=>{
        if(error){
            res.redirect('/host/add-home');
        }else{
            res.render('home-added', {pageTitle: 'home added'});
        }
    }); // Save the new home to the model
    res.render('home-added', {pageTitle: 'home added'});
}