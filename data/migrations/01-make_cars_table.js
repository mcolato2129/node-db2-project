exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
   
    tbl.string('vin', 17).notNullable().unique()
    
    tbl.string('make', 129).notNullable()
    
    tbl.string('model', 129).notNullable()
    
    tbl.numeric('mileage').unsigned().notNullable()
    
    tbl.string('title', 129)
    
    tbl.string('transmission', 129)
  })
};

exports.down = function (knex) {
  return knex.shema.dropTableIfExists('cars')
};
