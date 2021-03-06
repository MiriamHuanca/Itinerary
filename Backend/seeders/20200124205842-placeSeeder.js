'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Places', [
      {
        name: 'La Paz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Santa Cruz',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Place', null, {});
    */
  }
};
