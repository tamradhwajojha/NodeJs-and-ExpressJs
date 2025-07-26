const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const hostRouter = express.Router();

const rootDir = require('../util/path-util'); // Assuming path-util.js is in the util directory


hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
hostRouter.post('/add-home', (req, res, next) => {
   console.log(req.body);
   res.sendFile(path.join(rootDir, "views", "home-added.html"));
});

module.exports = hostRouter;