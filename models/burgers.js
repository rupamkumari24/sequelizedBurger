// Burger Model
// ===============
'use strict';
module.exports = function (sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
     burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourerId: DataTypes.INTEGER
  }, {
        timestamps: false
  })
  burgers.associate = function (models) {
  // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
   burgers.hasOne(models.devourers, { 
        foreignKey: 'burgerId'
   })
 };
 return burgers;
};