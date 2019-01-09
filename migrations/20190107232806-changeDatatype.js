'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface
        .changeColumn('Packs', 'packs_name', {
          type: Sequelize.STRING,
          allowNull: true
        });
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface
                .changeColumn('Packs', 'packs_name', {
                  type: Sequelize.INTEGER,
                  allowNull: true
                });
  }
};
