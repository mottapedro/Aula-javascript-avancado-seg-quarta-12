const express = require('express');
const path = require('path');
const connectToDatabase = require('./database/db');
const doteenv = require('dotenv');
const routes = require('./routes/routes');
doteenv.config();//função que identifica o arquivo .env
const app = express();

connectToDatabase();

const port = 3000;
app.set("view engine", "ejs");//FUNÇÃO DO EJS PARA RENDERISAR A PAGINA INDEX.EJS
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);//envoco a função que gera as rotas do projeto
/*
app.get('/', function (req, res) {
    res.send('Hello World')
});
//ROTA PARA ACESSAR A PÁGINA HOME
app.get('/home', function (req, res) {
    res.render('index')//RENDER -> RENDERISA A PAGINA INDEX.JS
})*/

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));