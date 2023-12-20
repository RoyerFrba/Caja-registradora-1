const { Sequelize } = require('sequelize');
const ArticuloFunction=require('./models/Articulo')
const CategoriaFunction=require('./models/Categoria')
const ProvedorFunction=require('./models/Provedor')
const ClienteFunction = require('./models/Cliente');
const TicketFunction=require('./models/Ticket');
const CompraFunction=require('./models/Compra');

const CajaFunction=require('./models/Caja');
const VendedorFunction=require('./models/Vendedor');
const CotizacionFunction=require('./models/Cotizacion');
// /**
//  * Conexion con la base de datos
//  */
// const dataBase = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
//    { logging: false, native: false }
// );

// /***
//  * Creacion de tablas
//  */
// ArticuloFunction(dataBase)
// CategoriaFunction(dataBase)
// FabricanteFunction(dataBase)
// ProvedorFunction(dataBase)

// /**
//  * Tablas
//  */
// const {Articulo,Provedor,Categoria,Fabricante} =dataBase.models


// Categoria.hasMany(Articulo);
// Articulo.belongsTo(Categoria);

// Fabricante.hasMany(Articulo);
// Articulo.belongsTo(Fabricante);

// Provedor.hasMany(Articulo);
// Articulo.belongsTo(Provedor);



// module.exports = {
//    Articulo,
//    // Favorite,
//    dataBase,
// };

const dataBase=new Sequelize({
   dialect:'sqlite',
   storage:'./tienda.sqlite',
   database:"tienda"
})

ArticuloFunction(dataBase)
CategoriaFunction(dataBase)
ProvedorFunction(dataBase)

ClienteFunction(dataBase)
TicketFunction(dataBase)
CompraFunction(dataBase)

VendedorFunction(dataBase)
CajaFunction(dataBase)
CotizacionFunction(dataBase)

// Creación de tablas
const { Articulo, Provedor, Categoria,Cliente,Ticket,Compra , Caja,Vendedor,Cotizacion } = dataBase.models;

Categoria.hasMany(Articulo, { foreignKey: 'CategoriaId' });
Articulo.belongsTo(Categoria, { foreignKey: 'CategoriaId' });

Provedor.hasMany(Articulo, { foreignKey: 'ProvedorId' });
Articulo.belongsTo(Provedor, { foreignKey: 'ProvedorId' });

Cliente.hasMany(Ticket)
Ticket.belongsTo(Cliente)

Vendedor.hasMany(Ticket,{ foreignKey: 'VendedorId' })
Ticket.belongsTo(Vendedor,{ foreignKey: 'VendedorId' })

Ticket.hasMany(Compra)
Compra.belongsTo(Ticket)

Articulo.hasMany(Compra,{foreignKey:"ArticuloId"})
Compra.belongsTo(Articulo,{foreignKey:"ArticuloId"})

Caja.hasMany(Ticket)
Ticket.belongsTo(Caja)


module.exports = {
  dataBase,
  Articulo,
  Provedor,
  Categoria,
  Compra,
  Ticket,
  Cliente,
  Vendedor,
  Caja,
  Cotizacion
};