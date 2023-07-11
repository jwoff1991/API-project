'use strict';

const { Spot } = require('../models');

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
   await Spot.bulkCreate([
    {
      ownerId: 3,
      address: '321 ashdale',
      city: 'cypress',
      state: 'california',
      country: 'USA',
      lat: 321.5464,
      lng: 65.2589,
      name: 'something interesting',
      description: 'a cool place to be',
      price: 100
    },
    {
      ownerId: 2,
      address: '321 carter',
      city: 'hunt',
      state: 'utah',
      country: 'USA',
      lat: 358.544,
      lng: 65.2589,
      name: 'something interesting',
      description: 'another cool place to be',
      price: 120
    },    {
      ownerId: 4,
      address: '911 uh oh',
      city: 'somehere bad',
      state: 'texas',
      country: 'USA',
      lat: 321.5464,
      lng: 65.2589,
      name: 'your in trouble',
      description: 'your gonna get caught',
      price: 1500
    },    {
      ownerId: 5,
      address: '654 dumbo',
      city: 'new york',
      state: 'new york',
      country: 'USA',
      lat: 321.5464,
      lng: 65.2589,
      name: 'its snowing somewhere',
      description: 'a cool place to be',
      price: 99
    },    {
      ownerId: 1,
      address: '257 ashberry ln',
      city: 'springfield',
      state: 'wisconson',
      country: 'USA',
      lat: 321.5464,
      lng: 65.2589,
      name: 'something not interesting',
      description: 'a not cool place to be',
      price: 1
    },
   ], { validate: true })
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
