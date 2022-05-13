'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          age: 15,
          name: 'user1',
          email: 'user1@test.com',
          password: 'test@123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          age: 31,
          name: 'user2',
          email: 'user2@test.com',
          password: 'test@123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          age: 54,
          name: 'user3',
          email: 'user3@test.com',
          password: 'test@123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
