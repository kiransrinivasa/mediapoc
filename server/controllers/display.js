const Media = require('../models').Media;
const Sequelize = require('sequelize');


module.exports = {
  list() {
    return Media
      .find({
        order: [
          Sequelize.fn( 'RANDOM' ),
        ],
        limit:1, raw: true,
      })
      .then(media => { console.log(JSON.stringify(media)); return JSON.stringify(media);})
      // .then (function(media) {
      //           console.log("inside then function "+JSON.stringify(media));
      //           return media;
      //       })
      .catch((error) => { console.log(JSON.stringify(error))});
  },

};
