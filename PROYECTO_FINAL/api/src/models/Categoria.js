const { DataTypes} = require("sequelize");

module.exports = (Sequelize) => {
    Sequelize.define("categoria", {
        categoria_id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey:true
        },
        categoria_descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false
    });
}