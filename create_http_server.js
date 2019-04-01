var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("Request was made: " + req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hey ninjas'); // re.end() expects String or Buffer
});

server.listen(3000, '127.0.0.1', function() {
    console.log("Now listening to port 3000");
});


