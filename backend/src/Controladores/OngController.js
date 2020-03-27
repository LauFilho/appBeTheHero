const conexao = require('../BD/conexao');
const crypto = require('crypto');//usado para criar ids criptografados
module.exports = {

    //-----------Create Table ONG
    async create(request, response) {
        const { nome, email, whats, cidade, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await conexao('ongs').insert({
            id,
            nome,
            email,
            whats,
            cidade,
            uf,
        })
        return response.json({ id });
    },
    //---------Rota pra *LISTAR ALL* na tabela ONGS
    
    async listar(request, response) {
        const ongs = await conexao('ongs').select('*');

        return response.json(ongs);
    },

}