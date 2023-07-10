'use strict';

const { Booking } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
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

    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 5,
        startDate: '2022-01-17',
        endDate: '2022-01-20'
      },
      {
        spotId: 2,
        userId: 4,
        startDate: '2022-02-17',
        endDate: '2022-02-20'
      },
      {
        spotId: 3,
        userId: 2,
        startDate: '2022-03-17',
        endDate: '2022-03-20'
      },
      {
        spotId: 4,
        userId: 3,
        startDate: '2022-04-17',
        endDate: '2022-04-20'
      },
      {
        spotId: 5,
        userId: 1,
        startDate: '2022-05-17',
        endDate: '2022-05-20'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
