const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util'); // Importing the root directory path utility

const homefilePath = path.join(rootDir, 'data', 'homes.json'); // Define the path to the homes data file

// Ensure data directory exists
const dataDir = path.dirname(homefilePath);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize homes.json if it doesn't exist
if (!fs.existsSync(homefilePath)) {
    fs.writeFileSync(homefilePath, JSON.stringify([]));
}

module.exports = class Home {
   constructor(houseName, price, location, rating, photo){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
   }

   save(callback){
    // Read existing homes first
    let homes = [];
    try {
        const fileContent = fs.readFileSync(homefilePath);
        homes = JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading homes file:', error);
        homes = [];
    }
    
    // Add new home
    homes.push(this);
    
    // Write back to file
    fs.writeFile(homefilePath, JSON.stringify(homes), (error) => {
      if (error) {
        console.error('Error writing to homes file:', error);
      } else {
        console.log('Home saved successfully');
      }
    });
   }
   
  static fetchAll(callback) {
    fs.readFile(homefilePath, (error, fileContent) => {
      if (error) {  
        console.error('Error reading homes file:', error);
        callback([]); // Return an empty array if there's an error
      } else {
        try {
          const homes = JSON.parse(fileContent);
          callback(homes); // Return the parsed homes via the callback
        } catch (parseError) {
          console.error('Error parsing homes file:', parseError);
          callback([]);
        }
      }
    });
  }
}
