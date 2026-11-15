const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..', 'client');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  const requested = req.url === '/' ? 'index.html' : req.url.replace(/^\//, '');
  const safePath = path.normalize(path.join(root, requested));
  if (!safePath.startsWith(root)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(safePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      return res.end('Not found');
    }
    const type = safePath.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Audit starter running at http://localhost:${port}`);
});

module.exports = server;
