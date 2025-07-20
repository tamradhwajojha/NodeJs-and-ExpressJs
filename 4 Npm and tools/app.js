//core module
const http = require('http');
//local module
const requestHandler = require('./requestHandler'); // Importing the request handler
const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});