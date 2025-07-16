
// local module imports
const { getUser } = require('./user');
// external module imports
const express = require('express');
// core module imports
const http = require('http');

const app = express()

app.use((req,res,next)=>{
  console.log("Came in first middleware", req.method, req.url);
  res.send("<h1>Welcome to ExpressJS</h1>");
})
app.use((req,res,next)=>{
  console.log("Came in second middleware", req.method, req.url);
})

const server = http.createServer(app)

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});