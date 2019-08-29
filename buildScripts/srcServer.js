var express = require('express');
var path = require("path");
var open = require("open");
var fs = require('fs');

var port = 3000;
var app = express();

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// app.get('/users', (req, res) => {
// 	// console.log(__dirname);
// 	res.json(JSON.parse(fs.readFileSync(path.join(__dirname,'../src/api/db.json')).toString()));
// 	// res.json([
// 	// 	{"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
// 	// 	{"id": 2, "firstName": "Bob1", "lastName": "Smith2", "email": "bob1@gmail.com"},
// 	// 	{"id": 3, "firstName": "Bob2", "lastName": "Smith3", "email": "bob2@gmail.com"},
// 	// 	{"id": 4, "firstName": "Bob3", "lastName": "Smith4", "email": "bob3@gmail.com"}
// 	// ]);
// });

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port)
	}
})
