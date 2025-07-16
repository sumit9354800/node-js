const getUser = (req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from the user route</h1>');
  res.end();
}

exports.getUser = getUser;