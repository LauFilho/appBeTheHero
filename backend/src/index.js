const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express(); // passa pra variavel app todas as funcionalidades do módulo express

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Rotas : Exemplo (localhost:3333)
Recursos : Exemplo  (/users?name=Lau)
*/

/* 
Métodos HTTP:
GET : Buscar/listar uma informação do back-end
POST : Criar uma informação no back-end
PUT : Alterar uma informação no back-end
DELETE: Delete uma informação no back-end
*/

/* Tipos de Parâmetros:

    1 - QueryParams : Parâmetros nomeados enviados na rota após "?",
     servindo para filtros, paginação
    2 - RouteParams : Parâmetros utilizados para identificar recursos. Exemplo: (Recurso + /:id)
    3 - Request Body: Corpo da Requisição , utilizado para CRIAR ou ALTERAR Recursos
*/

/* Banco de Dados::
    1 - SQL: MySql, SQLite, PosteGres, Oracle
    2 - NoSQL: MongoDB, CouchDB

    Forma de Buscar no Banco de Dados:
    1 - Driver do Banco em si, aí temos : SELECT * FROM tabela...
    2 - Query Builder: table('tabela').select('*').where(...);
 */

app.listen(3333) // Serve para ouvir a porta 3333 e rodar a aplicação
