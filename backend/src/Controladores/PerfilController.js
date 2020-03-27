const conexao = require('../BD/conexao');
const crypto = require('crypto');//usado para criar ids criptografados
//-----------Create Table Casos
module.exports = {
     async listarAll(request,response){
         const id_ong = request.headers.autorizacao;

         const casos = await conexao('casos')
         .where('id_ong',id_ong)
         .select('*'); 

         return response.json(casos);
     }
}