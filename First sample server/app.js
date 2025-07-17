const http = require('http');

console.log('i was here');

function requestHandler(req, res) {
  console.log('request recevied',req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  // res.write('<!DOCTYPE html>');
  // res.write('<html lang="en">');
  // res.write('<head>');
  // res.write('<title>Document</title>');
  // res.write('</head>');
  // res.write('<body>');
  // res.write('<h1>welcome to the first server</h1>');
  // res.write('</body>');
  // res.write('</html>');
  // res.end();
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>welcome to my first server</h1>
</body>
</html>`);
  res.end();
  
}
const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});