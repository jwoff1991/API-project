"use strict";

const { ReviewImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await ReviewImage.bulkCreate([
      {
        reviewId: 1,
        url: "somepic.com",
      },
      {
        reviewId: 2,
        url: "somepic.com",
      },
      {
        reviewId: 3,
        url: "somepic.com",
      },
      {
        reviewId: 4,
        url: "somepic.com",
      },
      {
        reviewId: 5,
        url: "somepic.com",
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  },
};
