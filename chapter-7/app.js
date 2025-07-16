const http = require('http');

const server = http.createServer((req,res)=>{
 console.log(req.url,req.method,req.headers);

})

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}); 