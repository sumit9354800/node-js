const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.write(`
    <html>
    <head>
    <title>My First Page</title>
    </head>
    <body>
     <h1>Hello World</h1>
    </body>
    </html>
    `)

    return res.end();
  } else if (req.url === '/create-user') {

    fs.writeFileSync('sumit.txt', 'User created successfully!');
    res.setHeader('Location', '/');
    return res.end();

  }
})


const PORT = 3001;
server.listen(PORT, () => {
  console.log((`server is running on port http://localhost:${PORT}`))
})