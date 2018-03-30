'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN
      }// Foreign key usage (added manually)
      devourerId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'devourers',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
  }
};