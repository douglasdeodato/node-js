var http = require('http');

var server = http.createServer(function(request, response) {	
	response.end("funcionou");	
});
server.listen(8000);