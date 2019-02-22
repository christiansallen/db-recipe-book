exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "alfredo", dishes_ID: 1 },
        { name: "spanish", dishes_ID: 2 },
        { name: "salmon", dishes_ID: 3 },
        { name: "mexican", dishes_ID: 2 },
        { name: "pepperoni", dishes_ID: 1 }
      ]);
    });
};
