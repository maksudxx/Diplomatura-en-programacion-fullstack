const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("producto", {
    producto_id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    producto_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    producto_descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    producto_precio:{
        type: DataTypes.DECIMAL(2),
        allowNull: false,
    },
    producto_stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  },{
    timestamps: false
});
};
