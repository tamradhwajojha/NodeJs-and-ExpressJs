// core modules 
const path = require('path');



const bodyParser = require('body-parser');
//external module
const express = require('express'); 

const rootDir = require('./util/path-util'); // Assuming path-util.js is in the util directory
const app = express();
//local module

app.use(express.static(path.join(rootDir, 'public'))); // Serve static files from the public directory 



const storeRouter = require('./Routers/storeRouter');
const hostRouter = require('./Routers/hostRouter');
app.use(bodyParser.urlencoded({extended: true})); // Use this for parsing form data

app.use(storeRouter);
app.use("/host",hostRouter);
app.use((req, res, next) => {    
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});