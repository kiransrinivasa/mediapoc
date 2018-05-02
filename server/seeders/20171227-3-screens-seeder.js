'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Screens', [{
        id : 1,
        screenInfo: 'Bala Home Screen ',
        activationCode: 'T46YO9F4AQF9SK29F8G',
        accountId: 1,
        siteId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 2,
        screenInfo: 'Vijay Home Screen',
        activationCode: 'DK7WKED9EKF9SK29F8G',
        accountId: 1,
        siteId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 3,
        screenInfo: 'Kiran Home Screen',
        activationCode: 'TY54ZED9EKF9SK29F8G',
        accountId: 1,
        siteId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Screens', null, {});
  }
};