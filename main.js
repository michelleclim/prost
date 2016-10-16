var BreweryDb = require('brewerydb-node');
var express = require('express');

var app = express();
app.set('json space', 4);

var port = '8080';

var brewerydb_api_key = function(){
	if (process.env.BREWERYDB_API) {
		return process.env.BREWERYDB_API;
	} else {
		console.log('API key not set');
	}
}

var brewdb = new BreweryDb(brewerydb_api_key());

app.get('/', function(req,res){
	res.send('hello world');
});

app.use(express.static(__dirname));

var server = app.listen(port, function(){
	var host = server.address().address;
	var port = server.address().port;

	host = (host === '::') ? 'localhost' : host;

	console.log('server listening at http://%s:%s', host, port);
});