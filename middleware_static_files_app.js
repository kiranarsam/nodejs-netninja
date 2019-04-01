var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// This is middleware, like static files can be used as below
/*
app.use('/assets', function(req, res, next) {

    console.log('In Use: req.url = ' + req.url);
    next();
});
*/

/* We can rename "assets" folder to any name, but name changed should be present in express.static('<name_changed_folder>')
   The <name_changed_folder> should be exists in the project folder.
 */
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
    var data = {age:29, job:'ninja', hobbies:['eating', 'fighting', 'fishing']};
    res.render('profile2', {person: req.params.name, data:data});
});

app.listen(3000);