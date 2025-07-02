const { sumRequestHandler } = require('./sum');
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to the Calculator</h1>
        <a href="/calculate">Go to Calculator</a>
      </body>
    </html>
    `)

    return res.end();

  } else if (req.url.toLowerCase() === '/calculate') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  
  <form action="/calculate-result" method="post">
    <input type="text" name="firstNumber" placeholder="First Number" id="">
    <input type="text" name="secondNumber" placeholder="Second Number" id="">
    <button type="submit">Calculate</button>
  </form>

</body>
</html>
      `);
    return res.end();

  } else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>404 Does not exist</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
    `)
  res.end();

}

exports.requestHandler = requestHandler;