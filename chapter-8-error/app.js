const http = require('http');
const { getUser } = require('./user');

const server = http.createServer(getUser);

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}); 