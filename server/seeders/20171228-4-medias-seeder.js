'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Media', [{
        id : 1,
        name: 'funny_joke1',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/img/funny_joke1.jpg',
        type: 'image/jpeg',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 2,
        name: 'joke2',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/img/joke2.jpg',
        type: 'image/jpeg',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 3,
        name: 'rajini2',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/img/rajini2.jpg',
        type: 'image/jpeg',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 4,
        name: 'Dumbest Guy On Earth Must Watch',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/Vids/Dumbest+Guy+On+Earth+Must+Watch.mp4',
        type: 'video/mp4',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 5,
        name: 'Extream Bike Ride-must Laugh',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/Vids/Extream+Bike+Ride+-must+Laugh.mp4',
        type: 'video/mp4',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 6,
        name: 'When Showoff Gone Failed Boys Always Do',
        file: 'https://s3-us-west-2.amazonaws.com/egg3data/Vids/When+Showoff+Gone+Failed+Boys+Always+Do.mp4',
        type: 'video/mp4',
        active: true,
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Media', null, {});
  }
};