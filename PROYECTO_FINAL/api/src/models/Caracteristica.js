const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("caracteristica", {
    caracteristica_id :{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    caracteristica_descripcion :{
        type: DataTypes.UUID,
        allowNull: false,
    },
    caracteristica_imagen:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },{
    timestamps: false
});
};
