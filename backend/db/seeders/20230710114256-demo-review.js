'use strict';

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 2,
        review: 'It was cool',
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: 'It was cool',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'It was cool',
        stars: 4
      },
      {
        spotId: 1,
        userId: 4,
        review: 'It was cool',
        stars: 1
      },
      {
        spotId: 1,
        userId: 2,
        review: 'It was cool, so i came again',
        stars: 5
      },
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  }
};
