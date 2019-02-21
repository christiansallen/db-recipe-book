exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "sugar", quantity: 2 },
        { name: "flour", quantity: 2.5 },
        { name: "water", quantity: 1 }
      ]);
    });
};
