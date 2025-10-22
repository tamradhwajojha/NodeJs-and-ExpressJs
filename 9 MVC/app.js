// core modules //
const path = require('path');



const bodyParser = require('body-parser');
//external modules
const express = require('express'); 

const rootDir = require('./util/path-util'); // Assuming path-util.js is in the util directory
const app = express();
//local module
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', 'views'); // Set the directory for views

app.use(express.static(path.join(rootDir, 'public'))); // Serve static files from the public directory 

// Middleware for parsing form data - MUST come before routes
app.use(bodyParser.urlencoded({extended: true})); // Use this for parsing form data

const storeRouter = require('./Routers/storeRouter');
const {hostRouter} = require('./Routers/hostRouter');
const errorController = require('./controllers/errorController');

app.use(storeRouter);
app.use("/host",hostRouter);
app.use(errorController.get404); // Use the error controller for handling 404 errors

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
