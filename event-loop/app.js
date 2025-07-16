const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

server.listen(3003, () => {
  console.log(`server is running on port http://localhost:${3003}`);
});
