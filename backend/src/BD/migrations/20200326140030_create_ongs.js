//Metodo up responsável pela criação da tabela
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('whats').notNullable();
      table.string('email').notNullable();
      table.string('cidade').notNullable();
      table.string('uf',2).notNullable();
  })
};
//Metodo up responsável pelo drop/exclusão da tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
