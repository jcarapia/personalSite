var express = require('express');
var path = require('path')

var app = express();

var PORT = process.env.PORT || 3000;

app.use('/resources', express.static(__dirname +  '/resources'));
app.use('/outside-resources', express.static(__dirname +  '/outside-resources'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
	console.log('The magic happens on port: ' + PORT);
});


