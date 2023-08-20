const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("mesa", {
    mesa_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    mesa_estado:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};
