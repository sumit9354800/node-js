
const fs = require('fs');

const getUser = (req, res) => {

  console.log(req.url, req.method);

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
      <input type="radio" name="gender" value="other"E id="other"><label for="other">Other</label><br><br>
      <input type="email" name="email" placeholder="Enter your email"><br><br>
      <button type="submit">Submit</button>
    </form>
    </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // const bodyObject = {}
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }

      const bodyObject = Object.fromEntries(params.entries());

      console.log(bodyObject);
      fs.writeFileSync('anuj.txt', JSON.stringify(bodyObject));
    })

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

};

module.exports = getUser
