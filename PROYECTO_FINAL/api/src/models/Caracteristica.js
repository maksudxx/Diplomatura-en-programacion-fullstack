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
  },{
    timestamps: false
});
};
