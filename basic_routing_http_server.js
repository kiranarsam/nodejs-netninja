var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log("Request was made: " + req.url);
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
    }
    else if(req.url === "/contact-us")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/contact.html", "utf8").pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var myObj = [{name: 'Ryu', age: '30'}, {name: 'Mary', age: '26'}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(myObj));
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
    }
});

server.listen(3000, '127.0.0.1', function() {
    console.log("Now listening to port 3000");
});


