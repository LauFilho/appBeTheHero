const express = require('express');
const OngControl = require('./Controladores/OngController');
const CasosControl = require('./Controladores/CasosControoler');
const PerfilControl = require('./Controladores/PerfilController');
const SessaoControl = require('./Controladores/SessaoController');
const routes = express.Router();
/* routes.post('/ongs', (request, response) => {
    //return response.send('Primeiro Teste') Envio simples de um texto
    const params = request.query; // Busco uma query especifica pela URL : http://localhost:3333/users?name=Lau&sexo=masculino
    const id = request.params
    const body = request.body
    console.log(params)
    console.log(id)
    console.log(body)
    return response.json({
        evento: 'Semana Omnistack 11.0, primeira aula',
        aluno: 'Laudelino Filho'
    })

}) // passa o diretório que rodará a aplicação. '/' Sozinho é diretório raiz */
// esse assync barra o código de continuar enquanto não fizer a query


//---------Rota de Login
routes.post('/sessao',SessaoControl.login);
//---------Rota pra *LISTAR ALL* na tabela ONGS
routes.get('/ongs',OngControl.listar);
//---------Rota pra *INSERIR* na tabela ONGS
routes.post('/ongs', OngControl.create);
//---------Rota pra *INSERIR* na tabela CASOS
routes.post('/casos', CasosControl.create);
//---------Rota pra *LISTAR ALL* na tabela Casos
routes.get('/casos', CasosControl.listar);

routes.delete('/casos/:id', CasosControl.deletar);

//---------Rota pra *CONSULTAR* na tabela Perfil
routes.get('/perfil', PerfilControl.listarAll);

module.exports = routes;
    