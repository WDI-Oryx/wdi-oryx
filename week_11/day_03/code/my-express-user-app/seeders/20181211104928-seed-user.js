"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Jacques",
        lastName: "Cousteau",
        email: "jacques@ga.co",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Bill",
        lastName: "Murray",
        email: "bill@ga.co",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    User.destroy_all;
    return queryInterface.bulkDelete("Users", null, {});
  }
};
