const conexao = require('../BD/conexao');

module.exports = {
    async login(request,response) {
        const {id} = request.body;

        const ong = await conexao('ongs')
        .where('id', id)
        .select('nome')
        .first();
        if(!ong){
            return response.status(400).json({error: 'Nenhuma ONG encontrada com esse ID!' })
        }
        return response.json(ong);
    }

}