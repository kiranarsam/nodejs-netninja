var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("Request was made: " + req.url);
    res.writeHead(200, {'Content-Type':'application/json'});

    var myObj = { 
        name: 'Ryu',
        job: 'Ninja',
        age: '30'
    };

    res.end(JSON.stringify(myObj)); // re.end() expects String or Buffer
});

server.listen(3000, '127.0.0.1', function() {
    console.log("Now listening to port 3000");
});


