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
    await SpotImage.bulkCreate(
      [
        {
          spotId: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Burg_Hohenzollern_10-2016.jpg/1920px-Burg_Hohenzollern_10-2016.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://www.burg-hohenzollern.com/tl_files/bhz_design/img/content/besucher_info_oeffnungszeiten.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://www.burg-hohenzollern.com/tl_files/bhz_design/img/content/besucher_gastro_restaurant_01.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://www.burg-hohenzollern.com/tl_files/bhz_design/img/Startseite-Slide-Bilder/startseite_burg2.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://www.schwarzwaldportal.com/wp-content/uploads/2021/05/burg-hohenzollern-2-scaled.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://www.sintra-portugal.com/Images/650px/palacio-de-pena-palace-sintra-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://previews.123rf.com/images/atomdruid/atomdruid1511/atomdruid151100097/47830501-colorful-facade-of-pena-palace-sintra-portugal.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://wetravelportugal.com/wp-content/uploads/pena-palace-sintra-1024x768.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://portugalvirtual.pt/ai-images/sintra/pena-palace-interior-004-16x9-2560x1440.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://www.travelonatimebudget.co.uk/wp-content/uploads/2022/01/Arabic-Room-Pena-Palace-670x503.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a.cdn-hotels.com/gdcs/production173/d887/4ed9f247-792c-416d-8ddf-0049ae3059a1.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://en.chateauversailles.fr/sites/default/files/styles/reseaux_sociaux/public/visuels_principaux/hisoires/histoire.jpg?itok=e-e3IPgR",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://i.natgeofe.com/n/5f01634d-6d3c-49a8-beb4-75283b26e411/Versailles_p262.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://media.vogue.fr/photos/5c2f47bff1254008ba1b73f4/16:9/w_1280,c_limit/galerie_des_glaces_7205.jpeg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://media.cntraveler.com/photos/5a91a36760543c4ae96c2ec7/16:9/w_2560,c_limit/Versailles_Getty_2018_GettyImages-154772942.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Festung_Hohenwerfen.jpg/500px-Festung_Hohenwerfen.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://www.mittersill.info/media/metaimage/burg-hohen-werfen-salzburg-kultur-geschichte.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://www.topworldimages.com/photos/Hohenwerfen-Castle5.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://i.pinimg.com/1200x/9d/f6/9a/9df69a3e65d26de080e275405b50ddb1.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Castillo_de_Hohenwerfen%2C_Werfen%2C_Austria%2C_2019-05-17%2C_DD_121.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://www.inspain.org/imgwbp/sitios/8/0/0/e7p3cf6vlih5qjxddaxqkycsyu_2000.webp",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://media.istockphoto.com/id/886635566/photo/inside-alcazar-of-segovia-is-a-castle-located-in-the-ancient-city-segovia-spain.jpg?s=1024x1024&w=is&k=20&c=LvQjmi-lKRo3DSP42VS7Ppm8PaieDq2P69Q0wVKoqMg=",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://previews.123rf.com/images/dudlajzov/dudlajzov1901/dudlajzov190106288/116831671-segovia-spain-october-4-2017-interior-of-alcazar-de-segovia-spain.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://i.pinimg.com/originals/14/fb/ba/14fbba40c812ec286bc806c25fe30522.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKxs7XpxZMahbGlBiAhwILZhy8-4RePBdAQ&usqp=CAU",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://media.architecturaldigest.com/photos/5d0bb6faaee3657a15ac27ae/16:9/w_2560%2Cc_limit/GettyImages-87841150.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/88/4e.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAenBcFg3zkEoURb8kgUsEUBVG2hae8jCUw&usqp=CAU",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ggf9xTmhjG_5wEWGgyifOZpz_ES73x8sQQ&usqp=CAU",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://www.oneoffplaces.co.uk/image/data/Blog%20pics/Castles/Haldon%20Belvedere%202.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://californiathroughmylens.com/wp-content/uploads/2012/02/Scottys-castle-from-above.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://www.nps.gov/common/uploads/grid_builder/deva/crop1_1/9038DC1F-EFFB-98B9-C8B60E614CF4BF72.jpg?width=640&quality=90&mode=crop",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://www.reviewjournal.com/wp-content/uploads/2015/04/web1_cerca-deathvalley-oct27_009_2.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://houseandhistory.com/wp-content/uploads/2019/11/Scottys-Bedroom-Today-1024x514.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://i.ebayimg.com/images/g/XVIAAOSwWPtel1tL/s-l1600.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/2021_Montezuma_Castle_3.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://www.utahsadventurefamily.com/wp-content/uploads/2019/05/Montezuma-Castle-5-600x400.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/c5/66.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://www.nps.gov/moca/learn/historyculture/images/cutaway_diagram_verticle.jpg?maxwidth=650&autorotate=false",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://www.nps.gov/moca/learn/historyculture/images/Level_3_Drawing.jpg",
          preview: false,
        },
      ],
      { validate: true }
    );
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
  }
};
