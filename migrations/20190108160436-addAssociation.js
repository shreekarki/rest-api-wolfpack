'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Wolves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wolves_id: {
        type: Sequelize.INTEGER
      },
      wolves_name: {
        type: Sequelize.STRING
      },
      wolves_gender: {
        type: Sequelize.STRING
      },
      wolves_birthdate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
       UserId: {
              type: Sequelize.INTEGER,
              onDelete: 'CASCADE',
              references: {
                model: 'Packs',
                key: 'id'
              }
            },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Wolves');
  }
};
