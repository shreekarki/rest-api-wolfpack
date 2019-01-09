'use strict';
module.exports = (sequelize, DataTypes) => {
  const Packs = sequelize.define('Packs', {
    packs_id: DataTypes.INTEGER,
    packs_name: DataTypes.STRING,
    packs_lat: DataTypes.FLOAT,
    packs_lon: DataTypes.FLOAT
  }, {});
  Packs.associate = function(models) {
     Packs.hasMany(models.Wolves, {
        foreignKey: 'PackId',
        as: 'wolves',
      });
  };
  return Packs;
};