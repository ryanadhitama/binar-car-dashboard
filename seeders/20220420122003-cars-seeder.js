"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cars",
      [
        {
          name: "Kijang Innova",
          price: 350000,
          image: "innova.png",
          size_id: 2,
        },
        {
          name: "Avanza",
          price: 450000,
          image: "avanza.png",
          size_id: 3,
        },
        {
          name: "Brio",
          price: 200000,
          image: "brio.png",
          size_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cars", null, {});
  },
};
