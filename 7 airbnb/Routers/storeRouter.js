// core modules 
const path = require('path');
const express = require('express');

const rootDir = require('../util/path-util'); // Assuming path-util.js is in the util directory

const storeRouter = express.Router();   
storeRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,"views", "index.html"));
});

module.exports = storeRouter;