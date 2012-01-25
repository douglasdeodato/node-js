var http = require('http');
var server = http.createServer(function(request, response){
	console.log("Usuário chamou a url ["+ request.url + "]");	
});
server.listen(8000);
console.log("Servidor iniciado em http://localhost:8000");