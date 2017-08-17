
exports.up = function(knex, Promise) {

	return Promise.all([                
        knex.schema.createTable('grupos', function(table) {
            table.increments('id').primary();
            table.string('descricao');
        }),
        knex.schema.createTable('permissoes', function(table) {
            table.increments('id').primary();
            table.string('aplicacao');
        }),
        knex.schema.createTable('tamanhos', function(table) {
            table.increments('id').primary();
            table.string('tamanho');
        }),
        knex.schema.createTable('produtos', function(table) {
            table.increments('id').primary();
            table.string('codigodebarras');
            table.string('descricao');
            table.decimal('qtde', 6, 2);
            table.decimal('preco', 6, 2);
            table.dateTime('dataregistro');
            table.dateTime('dataatualizacao');
            table.integer('idgrupo')
                .references('id')
                .inTable('grupos');
        }),
        knex.schema.createTable('fotos', function(table) {
            table.increments('id').primary();
            table.string('foto');
            table.integer('idproduto')
                .references('id')
                .inTable('produtos');
        }),     
        knex.schema.createTable('produtotamanhos', function(table) {
            table.increments('id').primary();
            table.integer('idtamanho')
                .references('id')
                .inTable('tamanhos');
            table.integer('idproduto')
                .references('id')
                .inTable('produtos');
        }),
        knex.schema.createTable('usuarios', function(table) {
            table.increments('id').primary();
            table.string('nome');
            table.string('login');
            table.string('senha');
            table.string('telefone');
            table.string('celular');
            table.string('email');
            table.integer('idade');
            table.dateTime('datanascimento');
            table.string('sexo');
            table.string('endereco');
            table.string('bairro');
            table.string('complemento');
            table.string('cidade');
            table.string('uf');
            table.string('cep');
            table.string('cpf');
            table.string('rg');
        }),
        knex.schema.createTable('usuariopermissoes', function(table) {
            table.increments('id').primary();
            table.integer('idpermissao')
                .references('id')
                .inTable('permissoes');
            table.integer('idusuario')
                .references('id')
                .inTable('usuarios');
        }),               
    ])
  
};

exports.down = function(knex, Promise) {

	return Promise.all([
        knex.schema.dropTable('usuariopermissoes'),        
        knex.schema.dropTable('produtotamanhos'),
        knex.schema.dropTable('fotos'),
        knex.schema.dropTable('grupos'),
        knex.schema.dropTable('permissoes'),
        knex.schema.dropTable('tamanhos'),
        knex.schema.dropTable('produtos'),        
        knex.schema.dropTable('usuarios')
                
    ])
  
};
