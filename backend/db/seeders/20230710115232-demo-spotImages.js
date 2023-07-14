'use strict';


const { SpotImage } = require('../models');

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
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'somepic.com',
        preview: true
      },
      {
        spotId: 2,
        url: 'somepic.com',
        preview: true
      },
      {
        spotId: 3,
        url: 'somepic.com',
        preview: true
      },
      {
        spotId: 4,
        url: 'somepic.com',
        preview: true
      },
      {
        spotId: 5,
        url: 'somepic.com',
        preview: true
      },
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  }
};
