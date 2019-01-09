'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wolves = sequelize.define('Wolves', {
    wolves_id: DataTypes.INTEGER,
    wolves_name: DataTypes.STRING,
    wolves_gender: DataTypes.STRING,
    wolves_birthdate: DataTypes.DATE
  }, {});
  Wolves.associate = function(models) {
     Wolves.belongsTo(models.Packs);
  };
  return Wolves;
};