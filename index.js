const express = require('express');
const connectToDatabase = require('./database/db');
const doteenv = require('dotenv');
doteenv.config();//função que identifica o arquivo .env
const app = express();

connectToDatabase();

const port = 3000;
app.set("view engine", "ejs");//FUNÇÃO DO EJS PARA REDERISAR A PAGINA INDEX.EJS
app.get('/', function (req, res) {
    res.send('Hello World')
});
//ROTA PARA ACESSAR A PÁGINA HOME
app.get('/home', function (req, res) {
    res.render('index')//RENDER -> RENDERISA A PAGINA INDEX.JS
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));