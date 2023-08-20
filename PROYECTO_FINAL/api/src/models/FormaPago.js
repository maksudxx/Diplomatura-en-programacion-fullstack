const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define(
    "formaPago",
    {
      forma_pago_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      forma_pago_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
