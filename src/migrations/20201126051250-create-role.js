module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      ro_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ro_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ro_description: {
        type: Sequelize.TEXT
      },
      ro_created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ro_updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  }
};