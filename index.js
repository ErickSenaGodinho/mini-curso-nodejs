const express = require('express');
const routes = require('./routes');
const database = require('./database');
const app = express();

app.use(express.json());
app.use(routes);

const porta = 3000;

database.sync()
    .then(app.listen(porta, () => console.log(`API rodando na porta ${porta}`)));
