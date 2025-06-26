const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body>
    <form action="/create-user" method="POST">
      <input type="text" name="username" placeholder="Enter your username"><br><br>
      <label for="gender">Gender:</label><br>
      <input type="radio" name="gender" value="male" id="male"><label for="male">Male</label><br>
      <input type="radio" name="gender" value="female" id="female"><label for="female">Female</label><br>
      <input type="radio" name="gender" value="other" id="other"><label for="other">Other</label><br><br>
      <input type="email" name="email" placeholder="Enter your email"><br><br>
      <button type="submit">Submit</button>
    </form>
    </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/create-user' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'User created successfully!');
    res.statusCode = 302; // Redirect status code
    res.setHeader('Location', '/');
    return res.end();

  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write("<body><h1>Welcome Page</h1></body>");
  res.write('</html>');
  res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
});