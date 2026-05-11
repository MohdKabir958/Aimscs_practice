const http = require('http');

const myHandler =  (req, res) => {
  const url = req.url;
  const method = req.method;

  // Basic Routing Logic
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
    
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1><p>This is a pure Node.js server.</p>');
    
  } else if (url === '/api/data' && method === 'GET') {
    // Sending JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Success", data: [1, 2, 3] }));
    
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

const server = http.createServer(myHandler);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});