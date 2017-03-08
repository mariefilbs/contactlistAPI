'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contacts = sequelize.define('Contacts', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    photo_URL: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contacts;
};