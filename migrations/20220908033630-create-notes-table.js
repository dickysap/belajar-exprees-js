'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notes', { 
      id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: sequelize.STRING
      },
      description: {
        type: sequelize.STRING
      },
      createdAt: {
        type: sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: sequelize.DATE,
        allowNull: false
      },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('notes');
  }
};
