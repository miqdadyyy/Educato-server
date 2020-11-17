'use strict';

const SequelizeGuard = require('sequelize-guard');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await SequelizeGuard.migration.up(queryInterface, Sequelize, {
      prefix: ''
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await SequelizeGuard.migration.down(queryInterface, Sequelize, {
      prefix: ''
    })
  }
};
