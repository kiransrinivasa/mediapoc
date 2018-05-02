'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sites', [{
        id: 1,
        siteName: 'Store#007',
        siteAddress: '10 Main Street, Edison, NJ',
        accountId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sites', null, {});
  }
};