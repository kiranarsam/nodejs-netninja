var fs = require('fs');

/*
//Synchronus operations reading and writing a file
var readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);
fs.writeFileSync('writeme.txt', readme);

*/
// Asynchronus reading and writing operations for a file
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeme1.txt', data, function(err){
        console.log("Done write operation, err: " + err);
    });
});
console.log("End of the file ");

