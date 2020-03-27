const conexao = require('../BD/conexao');
const crypto = require('crypto');//usado para criar ids criptografados
//-----------Create Table Casos
module.exports = {
    async create(request, response) {
        const { titulo, descricao, value } = request.body;
        const id_ong = request.headers.autorizacao;
        const [id_caso] = await conexao('casos').insert({
            titulo,
            descricao,
            value,
            id_ong,
        })
        return response.json({ id_caso });
    },
    //---------Rota pra *LISTAR ALL* na tabela ONGS

    async listar(request, response) {
        const { page = 1 } = request.query;
        const [totalCasos] = await conexao('casos').count()
        //console.log(totalCasos);
        const ongs = await conexao('casos')
            .join('ongs','ongs.id', '=', 'casos.id_ong')
            .limit(5)
            .offset((page - 1) * 5)
            .select('casos.*',
                    'ongs.nome',
                    'ongs.email',
                    'ongs.whats',
                    'ongs.cidade',
                    'ongs.uf');

        response.header('numtotalCasos',totalCasos['count(*)']);
        return response.json(ongs);
    },

    //---------Rota pra *LISTAR ESpecifico* na tabela ONGS
    async consultar(request, response) {
        const { id } = request.params;
        const casoesp = await conexao('casos').select('*').where('id', id);

        return response.json(casoesp);
    },
    //---------Rota pra *DELETAR* na tabela ONGS
    async deletar(request, response) {
        const { id } = request.params;
        const id_ong = request.headers.autorizacao;

        const casos = await conexao('casos')
            .where('id', id)
            .select('id_ong')
            .first();//serve para retornar apenas um resultado

        if (casos.id_ong != id_ong) {
            return response.status(401).json({ error: "Operação Não Autorizada!" });

        }
        await conexao('casos').where('id', id).delete();

        return response.status(204).send();
    }
};