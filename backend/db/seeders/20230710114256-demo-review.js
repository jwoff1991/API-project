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
        spotId: 2,
        userId: 3,
        review: 'Great atmosphere and friendly staff. The food was delicious!',
        stars: 4
      },
      {
        spotId: 3,
        userId: 4,
        review: 'The architecture of this place is breathtaking. The historical significance is palpable.',
        stars: 5
      },
      {
        spotId: 4,
        userId: 5,
        review: 'A must-visit for history buffs! The attention to detail is remarkable.',
        stars: 4
      },
      {
        spotId: 5,
        userId: 6,
        review: 'Had a fantastic time exploring the spot. The guided tour was informative and engaging.',
        stars: 4
      },
      {
        spotId: 6,
        userId: 7,
        review: 'The view from this spot is incredible. I could spend hours here.',
        stars: 5
      },
      {
        spotId: 7,
        userId: 8,
        review: 'The spot was well-maintained and the exhibits were interesting. A great educational experience!',
        stars: 4
      },
      {
        spotId: 8,
        userId: 9,
        review: 'A hidden gem! I was pleasantly surprised by the beauty of this place.',
        stars: 5
      },
      {
        spotId: 1,
        userId: 10,
        review: 'The spot was informative and the staff was knowledgeable. I learned a lot!',
        stars: 4
      },
      {
        spotId: 2,
        userId: 11,
        review: 'I was transported back in time. The spot really captures the essence of its era.',
        stars: 5
      },
      {
        spotId: 3,
        userId: 12,
        review: 'The spot was crowded but worth it. The history comes alive in every corner.',
        stars: 4
      },
      {
        spotId: 4,
        userId: 13,
        review: 'I loved the interactive exhibits. It made the history feel tangible and real.',
        stars: 5
      },
      {
        spotId: 5,
        userId: 14,
        review: 'The spot was well-preserved and the guides were passionate about sharing its story.',
        stars: 4
      },
      {
        spotId: 6,
        userId: 15,
        review: 'A perfect place to visit with family. The kids were fascinated!',
        stars: 5
      },
      {
        spotId: 7,
        userId: 16,
        review: 'I appreciate the effort put into preserving this historical site. It deserves more recognition.',
        stars: 4
      },
      {
        spotId: 8,
        userId: 17,
        review: 'The spot had a serene ambiance. It felt like stepping back in time.',
        stars: 5
      },
      {
        spotId: 1,
        userId: 18,
        review: 'The spot was clean and well-organized. I enjoyed every moment of my visit.',
        stars: 4
      },
      {
        spotId: 2,
        userId: 19,
        review: "The spot's architecture is awe-inspiring. It's a testament to human creativity.",
        stars: 5
      },
      {
        spotId: 3,
        userId: 20,
        review: 'The spot was immersive and the audio guide was very informative.',
        stars: 4
      },
      {
        spotId: 4,
        userId: 21,
        review: 'I was impressed by the spot\'s dedication to authenticity. A memorable experience!',
        stars: 5
      },
      {
        spotId: 5,
        userId: 22,
        review: 'The spot was beautifully maintained. The attention to detail is commendable.',
        stars: 4
      },
      {
        spotId: 6,
        userId: 23,
        review: 'A peaceful escape from the city. The spot exudes tranquility and history.',
        stars: 5
      },
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
