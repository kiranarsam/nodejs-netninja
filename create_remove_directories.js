var fs = require('fs');

/* Synchronus Operations
fs.mkdirSync('stuff');

fs.rmdirSync('stuff');
*/

// Asynchronus operation
/*
fs.mkdir('stuff', function(err) {
    fs.readFile('readme.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/writeme.txt', data, function(err){
            console.log("Successfully written file in destination path, err = " + err);
        });
    });
});
*/

fs.unlink('./stuff/writeme.txt', function(err){
    if(!err){
        console.log("Successfully removed ./stuff/writeme.txt file");
        fs.rmdir('stuff',function(err){
            if(!err) {
                console.log('Successfully removed stuff folder');
            }
        });
    }
});
