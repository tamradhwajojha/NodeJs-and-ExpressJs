const http = require('http');
const fs = require('fs');

console.log('i was here'); // cnt // add this to see changes

function requestHandler(req, res) {
  console.log('request recevied',req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
 if(req.url === '/'){
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>This is the page to buy product</h1>
  <form action="buy-product" method="POST">
    <input type="text" name="product" placeholder="Enter product name">
    <br>
    <input type="number" name="quantity" placeholder="Enter quantity">
    <br>
    <input type="text" name="price" placeholder="Enter price">
    <button type="submit">Buy</button>  
  </form>
</body>
</html>`);
  }
  else if(req.url === '/buy-product'){
    console.log('buy product data request received');
    fs.writeFileSync('buy.txt', 'Myntra app');
    res.statusCode = 302;
    res.setHeader('Location', '/products');

    
  }
  else if(req.url === '/products'){
     res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
</head>
<body>
  <h1>Thank you your order is placed</h1>
</body>
</html>`);
  }
  else{
     res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Not found</title>
</head>
<body>
  <h1>404 Page Not found</h1>
</body>
</html>`);
  }
  res.end();
  
}
const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});