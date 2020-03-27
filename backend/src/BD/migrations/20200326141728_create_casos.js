
exports.up = function(knex) {
    return knex.schema.createTable('casos', function(table){
        table.increments(); //Simula Sequência
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.decimal('value').notNullable();
        table.string('id_ong').notNullable();

        //FK Keys
        table.foreign('id_ong').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos');
 
};
