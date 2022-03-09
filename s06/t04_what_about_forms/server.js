const http = require('http');
const fs = require("fs");

const options = {
    host: '127.0.0.1',
    port: 8000
};

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/script.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream('script.js').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plane'});
        res.end('Unknown request!');
    }
}).listen(options.port, options.host, () => {
    console.log(`Server started at port ${options.port}`);
});