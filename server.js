const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const dir = 'c:\\Users\\asif\\Documents\\Visual Studio Code';

const server = http.createServer((req, res) => {
  let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.js') contentType = 'application/javascript';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Website running at http://localhost:${PORT}`);
  console.log(`📂 Serving files from: ${dir}`);
  console.log(`Press Ctrl+C to stop`);
});
