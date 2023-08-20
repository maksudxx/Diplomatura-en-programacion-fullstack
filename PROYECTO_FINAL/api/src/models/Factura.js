const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define(
    "factura",
    {
      factura_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      factura_fecha:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      factura_nro:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
