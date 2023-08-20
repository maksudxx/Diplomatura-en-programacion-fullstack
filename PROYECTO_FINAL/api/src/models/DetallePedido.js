const {DataTypes} = require('sequelize');

module.exports = (Sequelize)=>{
    Sequelize.define('detalle_pedido',{
        detalle_pedido_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        detalle_pedido_cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        detalle_pedido_importe:{
            type: DataTypes.DECIMAL(2),
            allowNull: false,
        }
    })
}