const Home = require('../models/Home'); // Importing registeredHomes from Home model

exports.getHome = (req, res, next) => {
    Home.fetchAll((homes) => {
        res.render('index', { homes: homes, pageTitle: 'apka Air BNB' }); // Render index.ejs with homes data
    });
    // res.sendFile(path.join(rootDir,"views", "index.ejs"));
}