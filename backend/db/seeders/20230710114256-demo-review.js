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
        review: 'This place was absolutly AMAZING!! The staff was quick, food was delicious, i felt like i was really in the middle ages!',
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: 'If you want a place to stay for a night, why not choose a castle?! My wife was thinking I was crazy but after about 20 mins she knew i was right! I lvoe this place, will definately come back! ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Weekend getaway with the FAM-BAM! What an adventure! All I can really say is wow...',
        stars: 4
      },
      {
        spotId: 1,
        userId: 4,
        review: 'Yeah it was alright, Im not into the whole knights in shinny armour thing so it was just okay.. Maybe next time ?',
        stars: 1
      },
      {
        spotId: 1,
        userId: 2,
        review: 'This is like Chamelot on STERIODS! What a freaking cool place man. You NEED to come! ',
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
