const http = require('http');
const userRequestHandler = require('./chunk.js'); // Importing the userRequestHandler from chunk.js
// Note: Ensure that the path to chunk.js is correct relative to this file
// If chunk.js is in the same directory, './chunk.js' is correct.
const server = http.createServer(userRequestHandler); // Using the imported handler

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
});