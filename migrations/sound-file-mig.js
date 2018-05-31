'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SoundFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      file: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        // primaryKey: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SoundFiles');
  }
};
