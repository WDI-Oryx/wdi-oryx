"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Todos",
      [
        {
          task: "My first todo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "My second todo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "My third todo",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
