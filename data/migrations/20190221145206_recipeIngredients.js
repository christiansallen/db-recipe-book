exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", table => {
    table
      .integer("recipe_ID")
      .references("id")
      .inTable("recipes");

    table
      .integer("ingredients_ID")
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeIngredients");
};
