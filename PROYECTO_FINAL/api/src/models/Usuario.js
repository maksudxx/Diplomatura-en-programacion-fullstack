const { DataTypes} = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("usuario", {
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    usuario_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuario_telefono:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },{
    timestamps: false
});
};
