'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    position: DataTypes.TEXT,
    number: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    user_name: DataTypes.STRING
  }, {});
  player.associate = function(models) {
    // associations can be defined here
  };
  return player;
};