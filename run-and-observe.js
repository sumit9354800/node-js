const fs = require("fs"); // ✅ Required to use fs

console.log('1 start of script');

// Synchronous read
console.log('2 reading file synchronously');
const syncData = fs.readFileSync('sammy-imx.txt', 'utf-8');
console.log('3 synchronously read complete:', syncData);

// Asynchronous read
console.log('4 reading file asynchronously');
fs.readFile('sammy-imx.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('6 data read asynchronously:');
  console.log(data);
});

console.log('5 end of script');
