var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + "/readme.txt", 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

myReadStream.pipe(myWriteStream); // Only this can be done from Readable Stream to Writable Stream, and NOT vice versa

/*
myReadStream.on('data', function(chunk){
    console.log("New chunk received.");
    //console.log(chunk);
    myWriteStream.write(chunk);
});
*/
