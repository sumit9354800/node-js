const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write("<body><h1>Hello World</h1></body>");
    res.write('</html>');
    return res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write("<body><h1>About us</h1></body>");
    res.write('</html>');
   return res.end();
  } else if (req.url === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write("<body><h1>Contact us</h1></body>");
    res.write('</html>');
   return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Page not found</h1></body>');
  res.write('</html>');
  res.end();


})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})