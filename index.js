/* link para documentação: https://nodejs.org/docs/latest-v8.x/api/synopsis.html */
var http = require('http');

http.createServer(function(req, res){
    res.end("Gerenciador Financeiro");
}).listen(8080);