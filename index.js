/* link para documentação Node: https://nodejs.org/docs/latest-v8.x/api/synopsis.html 
   link para documentação Express https://expressjs.com/pt-br/
*/
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro");
});

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina sobre empresa");
});

app.get("/blog", function(req, res){
    res.send("Pagina do blog");
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

//localhost:8080
app.listen(8080);