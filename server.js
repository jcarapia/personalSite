var express = require('express');
//var php = require('express-php');
var phpExpress = require('php-express')({
	binPath: 'php'
});
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.set('views', __dirname);
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

app.use('/resources', express.static(__dirname +  '/resources'));
app.use('/outside-resources', express.static(__dirname +  '/outside-resources'));

app.all(/.+\.php$/, phpExpress.router);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/resume', function(req, res) {
	res.sendFile(path.join(__dirname + '/resources/files/jorgeCarapiaResume.pdf'));
})

app.listen(PORT, () => {
	console.log('The magic happens on port: ' + PORT);
});


