var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Environment Variables
var PORT = process.env.PORT || 3000;
var api_key = process.env.api_key;
var email = process.env.email_address;
var domain = 'sandbox614028c0d12b4e978dcdeca5945a9a18.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
// Express Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/resources', express.static(__dirname +  '/resources'));
app.use('/outside-resources', express.static(__dirname +  '/outside-resources'));

// Routes Configuration
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/resume', function(req, res) {
	res.sendFile(path.join(__dirname + '/resources/files/jorgeCarapiaResume.pdf'));
})

app.post('/sendMail', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var antispam = req.body.antispam;	

	if(antispam === '10') {
		var data = {
			from: name + ' <' +email+ '>', 
			to: email,
			subject: 'New Message from JorgeCarapia.com',
			text: message
		};

		mailgun.messages().send(data, function (error, body) {
    	console.log(body);
 		});
	};
});

app.listen(PORT, () => {
	console.log('The magic happens on port: ' + PORT);
});


