exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
   
    tbl.string('vin', 17).notNullable().unique()//If a data base has a field that MUST BE FILLED OUT AND NOT LEFT BLANK THE .notNullable() is the one to use when using knex. .unique() makes sure that no one can have the same name regarding that specific "catogory/section" etc.
    
    tbl.string('make', 129).notNullable()
    
    tbl.string('model', 256).notNullable()
    
    tbl.integer('mileage').unsigned().notNullable()
    
    tbl.string('title', 129)
    
    tbl.string('transmission', 129)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
