const fs = require('fs');
const { URLSearchParams } = require('url');
//external module
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('request received', req.method, req.url);
    next();
});
app.get('/', (req, res, next) => {
       res.send(`<!DOCTYPE html>
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
    });
app.post('/buy-product', (req, res, next) => {
   
  console.log('buy product data request received');
      const arr = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        arr.push(chunk);
      });
      req.on('end', () => {
        const body = Buffer.concat(arr).toString(); 
        const URLparams = new URLSearchParams(body);
        const jsonObject = {};
        for(const [key, value] of URLparams.entries()) {
          jsonObject[key] = value;
        }
        console.log('jsonObject', jsonObject);
        fs.writeFile('buy.txt', JSON.stringify(jsonObject), (err)=>{
          res.statusCode = 302;
        res.setHeader('Location', '/products');
        res.end();
        console.log('sending response');
        }); 
      });
});
app.get('/products', (req, res, next) => {
     res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
</head>
<body>
  <h1>Thank you your order is placed</h1>
</body>
</html>`);
});
app.use((req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Not found</title>
</head>
<body>
  <h1>404 Page Not found</h1>
</body>
</html>`);
});
// app.get("/test",(req, res, next) => {
//     console.log('Second middleware', req.method, req.url);
//     res.send('Hello from Express!');
// });
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});