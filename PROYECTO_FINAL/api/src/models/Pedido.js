const {DataTypes} = require ('sequelize');

module.exports = (Sequelize) =>{
    Sequelize.define('pedido', {
        pedido_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        pedido_fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        pedido_total:{
            type: DataTypes.DECIMAL(2),
            allowNull: false
        }
    },{
        timestamps: false
    });
}