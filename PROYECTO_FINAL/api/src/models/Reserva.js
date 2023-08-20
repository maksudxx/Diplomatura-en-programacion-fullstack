const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("reserva", {
    reserva_id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    reserva_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reserva_cantidad_personas:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
