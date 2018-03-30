// Homework 15 - Eat the Burger - Part 2!



// Burger Eater Model
// ===============
'use strict';
module.exports = function (sequelize, DataTypes) {
  var devourers = sequelize.define('devourers', {
      devourer_name: DataTypes.STRING,
      burgerId: DataTypes.INTEGER//,
      //createdAt: DataTypes.DATE,
      //updatedAt: DataTypes.DATE
  }, {
        timestamps: false
  })
  devourers.associate = function (models) {
  // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
   //devourers.belongsTo(models.burgers, { 
     //   foreignKey: 'burgerId'
  // })
 };
 return devourers;
};

