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
   await Spot.bulkCreate(
     [
       {
         ownerId: 3,
         address: "72379 Burg Hohenzollern",
         city: "Burg Hohenzollern",
         state: "Burg Hohenzollern",
         country: "Germany",
         lat: 48.19235,
         lng: 8.5838,
         name: "Hohenzollern Castle",
         description:
           "Hohenzollern Castle is the ancestral seat of the imperial House of Hohenzollern. The third of three hilltop castles built on the site, it is located atop Mount Hohenzollern, above and south of Hechingen, on the edge of the Swabian Jura of central Baden-Württemberg, Germany",
         price: 400,
       },
       {
         ownerId: 2,
         address: "Estrada da Pena",
         city: "2710-609",
         state: "Sintra",
         country: "Portugal",
         lat: 358.544,
         lng: 65.2589,
         name: "Pena Palace",
         description:
           "The Pena Palace (Portuguese: Palácio da Pena) is a Romanticist castle in São Pedro de Penaferrim, in the municipality of Sintra, on the Portuguese Riviera. The castle stands on the top of a hill in the Sintra Mountains above the town of Sintra, and on a clear day it can be easily seen from Lisbon and much of its metropolitan area. It is a national monument and constitutes one of the major expressions of 19th-century Romanticism in the world. The palace is a UNESCO World Heritage Site and one of the Seven Wonders of Portugal. It is also used for state occasions by the President of the Portuguese Republic and other government officials",
         price: 960,
       },
       {
         ownerId: 4,
         address: `Place d'Armes`,
         city: "Versailles",
         state: "78000",
         country: "France",
         lat: 48.48173,
         lng: 2.7132,
         name: "Palace of Versailles",
         description:
           "The Palace of Versailles, French: Château de Versailles, is a former royal residence built by King Louis XIV located in Versailles, about 19 kilometers (12 mi) west of Paris, France. The palace is owned by the French Republic and since 1995 has been managed, under the direction of the French Ministry of Culture, by the Public Establishment of the Palace, Museum and National Estate of Versailles.[ About 15,000,000 people visit the palace, park, or gardens of Versailles every year, making it one of the most popular tourist attractions in the world.",
         price: 760,
       },
       {
         ownerId: 5,
         address: "Burgstrabe 2",
         city: "Werfen",
         state: "Salzburg",
         country: "Austria",
         lat: 47.2855,
         lng: 13.1116,
         name: "Hohenwerfen Castle",
         description:
           'Hohenwerfen Castle is a medieval rock castle, situated on a 623-metre (2,044 ft) precipice overlooking the Austrian market town of Werfen in the Salzach valley, approximately 40 kilometres (25 mi) south of Salzburg. The fortress is surrounded by the Berchtesgaden Alps and the adjacent Tennen Mountains. Hohenwerfen is a "sister" of Hohensalzburg Fortress, both built by the Archbishops of Salzburg in the 11th century. The castle became known internationally as the main location in the film Where Eagles Dare.',
         price: 465,
       },
       {
         ownerId: 1,
         address: "Reina Victoria Eugenia",
         city: "Segova",
         state: "40003",
         country: "Spain",
         lat: 40.5709,
         lng: 4.0757,
         name: "Alcázar of Segovia",
         description:
           "The Alcázar de Segovia was once a medieval fortress, but it was rebuilt in its current, castle-like style following a fire in 1862. Today, visitors can explore its museum, multiple halls and secret passageways, and towers overlooking Segovia’s town square. Then, be prepared for some equally impressive interiors. Theyre marked by stained glass windows, polished suits of armor, lavish dining and dancing halls, and so many canopied beds",
         price: 680,
       },
       {
         ownerId: 3,
         address: "Belvedere",
         city: "New York City",
         state: "New York",
         country: "USA",
         lat: 40.4646,
         lng: 73.5809,
         name: "Belvedere Castle",
         description:
           "Sitting pretty in the middle of New York City's Central Park is one of the country's most famous castles. Completed in 1872, the park's co-designer, Calvert Vaux, wanted the Gothic structure to serve as a surprising landmark for visitors to discover on their walks.",
         price: 1540,
       },
       {
        ownerId: 5,
        address: "123 Scotty's Castle Rd",
        city: "N/a",
        state: "California",
        country: "USA",
        lat: 37.156,
        lng: 117.20294,
        name: "Scotty's Castle",
        description:
          "Walter E. Scott was a con man and gold prospector who convinced a Chicago couple, Albert and Bessie Johnson, to build this 1922 Spanish-style castle in Death Valley National Park, California. Though Scott never owned or lived in it, he was the inspiration behind its name",
        price: 2680,
      },
      {
        ownerId: 1,
        address: "Montezuma Castle Rd",
        city: "Camp Verde",
        state: "Arizona",
        country: "USA",
        lat: 34.3640,
        lng: 111.5012,
        name: "Montezuma Castle",
        description:
          "The Sinagua people built this 20-room castle on a cliff approximately 800 years ago in what is known today as Camp Verde, Arizona.",
        price: 7680,
      },
     ],
     { validate: true }
   );
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  }
};
