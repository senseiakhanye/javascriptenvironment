const jsf = require('json-schema-faker');
const schema  = require('./mockDataSchema');
const fs = require('fs');
const chalk = require('chalk');

jsf.extend('faker', () => require('faker'));
const json = JSON.stringify(jsf.generate(schema));

fs.writeFile('./src/api/db.json', json, function(err) {
	if (err) {
		return console.log(chalk.red(err));
	}
	else {
		console.log(chalk.green("Mock data generated."));
	}
})
