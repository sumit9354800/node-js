const sumRequestHandler = (req, res) => {
  console.log(`hello bhai log`, req.url);
  const body = [];
  req.on('data', (chunk) => body.push(chunk));
  req.on('end', () => { 
    const paraseBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(paraseBody);
    const bodyObj = Object.fromEntries(params.entries());
    const sum = Number(bodyObj.firstNumber) + Number(bodyObj.secondNumber);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>The sum is: ${sum}</h1>`);
    res.end();
  });
}

exports.sumRequestHandler = sumRequestHandler;