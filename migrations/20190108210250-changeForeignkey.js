'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Packs', {
         id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: Sequelize.INTEGER
         },
         packs_id: {
           type: Sequelize.INTEGER
         },
         packs_name: {
           type: Sequelize.INTEGER
         },
         packs_lat: {
           type: Sequelize.FLOAT
         },
         packs_lon: {
           type: Sequelize.FLOAT
         },
         createdAt: {
           allowNull: false,
           type: Sequelize.DATE
         },
         updatedAt: {
           allowNull: false,
           type: Sequelize.DATE
         },
       });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
