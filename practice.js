const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body>
    <a href='/' >Home</a>
    <a href='/men' >Men</a>
    <a href='/women' >Women</a>
    <a href='/card' >Card</a>
     <h1>Hello from the Home Page!</h1>
      </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url === '/men') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Men Page</title></head>');
    res.write(`<body>
      <a href='/' >Home</a>
    <a href='/men' >Men</a>
    <a href='/women' >Women</a>
    <a href='/card' >Card</a>
      <h1>Hello from the Men Page!</h1>
      </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url === '/women') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Women Page</title></head>');
    res.write(`<body>
      <a href='/' >Home</a>
    <a href='/men' >Men</a>
    <a href='/women' >Women</a>
    <a href='/card' >Card</a>
      <h1>Hello from the Women Page!</h1>
      </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url === '/card') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Card Page</title></head>');
     res.write(`<body>
      <a href='/' >Home</a>
    <a href='/men' >Men</a>
    <a href='/women' >Women</a>
    <a href='/card' >Card</a>
      <h1>Hello from the Card Page!</h1>
      </body>`);
    res.write('</html>');
    return res.end();
  }

})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
});