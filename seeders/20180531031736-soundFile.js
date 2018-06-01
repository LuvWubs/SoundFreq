'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      // return queryInterface.bulkInsert('Person', [{
      //   name: 'John Doe',
      //   isBetaMember: false
      // }], {});
      return queryInterface.bulkInsert('SoundFiles', [{
        name: 'buzz',
        file: 'bug-buzz.wav',
        description: 'bug'
      }, {
        name: 'call',
        file: 'bug-call.wav',
        description: 'bug'
      }, {
        name: 'clicks',
        file: 'bug-clicks.wav',
        description: 'bug'
      }, {
        name: 'fireants',
        file: 'bug-fireants.wav',
        description: 'bug'
      }, {
        name: 'purring',
        file: 'bug-purring.wav',
        description: 'bug'
      }, {
        name: 'wings',
        file: 'bug-wings.wav',
        description: 'bug'
      }, {
        name: 'beatbox',
        file: 'drops-beatbox.wav',
        description: 'drops'
      }, {
        name: 'explosion',
        file: 'drops-explosion.wav',
        description: 'drops'
      }, {
        name: 'warble',
        file: 'drops-warble.wav',
        description: 'drops'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
