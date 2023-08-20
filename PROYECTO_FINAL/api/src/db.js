require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE } = process.env;

const sequelize = new Sequelize(
	`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`,
	{
		logging: false, 
		native: false, 
	}
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Rol, Usuario, Mesa, Reserva, Caracteristica, Pedido, Producto, Categoria} = sequelize.models;

// // Aca vendrian las relaciones

//Relacion 1 a N entre usuario y rol
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

//Relacion 1 a N entre reservacion con mesa y usuario
Mesa.hasMany(Reserva, { foreignKey: 'mesa_id' });
Reserva.belongsTo(Mesa, { foreignKey: 'mesa_id'});

Usuario.hasMany(Reserva, { foreignKey: 'usuario_id' });
Reserva.belongsTo(Mesa, { foreignKey: 'usuario_id}'});

// Relacion 1 a N entre Pedido y Usuario
Usuario.hasMany(Pedido, { foreignKey: 'usuario_id'});
Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id'});


//Realicion 1 a N entre Producto y Caracteristica y Categoria
Categoria.hasMany(Producto, { foreignKey: 'categoria_id'});
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id'});

Caracteristica.hasMany(Producto, { foreignKey: 'caracteristica_id'});
Producto.belongsTo(Caracteristica, { foreignKey: 'caracteristica_id'});




module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};