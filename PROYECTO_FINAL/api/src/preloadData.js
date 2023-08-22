const { v4: uuidv4 } = require("uuid");

function createData() {
  const roles = [
    { rol_id: uuidv4(), rol_descripcion: "admin" },
    { rol_id: uuidv4(), rol_descripcion: "cliente" },
    { rol_id: uuidv4(), rol_descripcion: "basic" },
  ];

  const categoria = [
    { categoria_id: uuidv4(), categoria_descripcion: "Pastas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Pizzas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Hamburguesas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Bebidas sin alcohol" },
    { categoria_id: uuidv4(), categoria_descripcion: "Bebidas con alcohol" },
    { categoria_id: uuidv4(), categoria_descripcion: "Postres" },
    { categoria_id: uuidv4(), categoria_descripcion: "Entradas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Milanesas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Ensaladas" },
    { categoria_id: uuidv4(), categoria_descripcion: "Salsas" },
  ];

  const caracteristica = [
    { caracteristica_id: uuidv4(), caracteristica_descripcion: "Vegetariano" },
    { caracteristica_id: uuidv4(), caracteristica_descripcion: "Picante" },
    { caracteristica_id: uuidv4(), caracteristica_descripcion: "Ninguno" },
  ];

  const productos = [
    {
      productos_id: uuidv4(),
      producto_nombre: "Panzanella italiana",
      producto_descripcion:
        "Ingredientes: tomate cherry rojo y amarillo, tomate perrita, cebolla, pan frito, ajo,albahaca y palta",
      producto_precio: 10,
      producto_stock: 5,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada nicoise",
      producto_descripcion: "Ingredientes: tomate, cebolla, pimiento rojo, huevo, atún, anchoa, aceitunas negras, arvejas, papa, lechuga y vinagreta",
      producto_precio: 15,
      producto_stock: 15,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada mixta",
      producto_descripcion: "Ingredientes: tomate, cebolla, lechuga, huevo, zanahoria, remolacha",
      producto_precio: 25,
      producto_stock: 5,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada de pepino japonés",
      producto_descripcion: "Ingredientes: pepino, algas secas, menta, perejil, sesamo, aji, salsa de pescado",
      producto_precio: 8,
      producto_stock: 35,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[1].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada de col",
      producto_descripcion: "Ingredientes: col blanca, zanahorias, manzana, mayonesa, cebolla y mostaza",
      producto_precio: 25,
      producto_stock: 11,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada Waldorf",
      producto_descripcion: "Ingredientes: lechuga, apio, manzana, nueces, pasas de uva y yema de huevo",
      producto_precio: 8,
      producto_stock: 18,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },

    {
      productos_id: uuidv4(),
      producto_nombre: "Ensalada Cesar",
      producto_descripcion: "Ingredientes: lechuga, queso parmesano, salsa perrins, zumo de limon, yema de huevo",
      producto_precio: 15,
      producto_stock: 15,
      categoria_id: categoria[8].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Fried Ravioli",
      producto_descripcion: "Ravioles hechos en casa, fritos, rellenos de cremoso dip de alcachofa (8pza)",
      producto_precio: 80,
      producto_stock: 15,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ravioles",
      producto_descripcion: "Ravioles hechos en casa, rellenos a elección: (Ricotta, Carne, Pollo, Jamon y queso) (8pza)",
      producto_precio: 80,
      producto_stock: 15,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Fideos",
      producto_descripcion: "Fideos al huevo hechos en casa, sabores: Espinaca, zapallo, Zanahoria",
      producto_precio: 80,
      producto_stock: 30,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Ñoquis",
      producto_descripcion: "Ñoquis hechos en casa, sabores: Espinaca, zapallo, Zanahoria",
      producto_precio: 80,
      producto_stock: 35,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Lasagna Bolognesa",
      producto_descripcion: "Lasagna preparada con capas carne bolognesa, salsa pomodoro, bechamel de parmesano y queso mozzarella",
      producto_precio: 100,
      producto_stock: 20,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Lasagna Vegetariana",
      producto_descripcion: "Lasagna preparada con calabaza, berenjena, zanahoria,champinon, espinaca y queso mozzarella",
      producto_precio: 80,
      producto_stock: 20,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Sorrentinos",
      producto_descripcion: "Sorrentinos de espinaca hechos en casa, sabores: ricotta, carne, pollo, jamon y queso",
      producto_precio: 80,
      producto_stock: 20,
      categoria_id: categoria[0].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Salsa bolognesa",
      producto_descripcion: "Salsa hecha en casa, Ingredientes: puré de tomates, cebolla, carne picada, zanahoria y especias",
      producto_precio: 20,
      producto_stock: 35,
      categoria_id: categoria[10].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Salsa carbonara",
      producto_descripcion: "Salsa hecha en casa, Ingredientes: yema de huevos, queso parmesano, crema de leche y especias",
      producto_precio: 17,
      producto_stock: 15,
      categoria_id: categoria[10].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Salsa 4 quesos",
      producto_descripcion: "Salsa hecha en casa, Ingredientes: queso parmesano, gouda, cheddar y roquefort, leche y  especias",
      producto_precio: 40,
      producto_stock: 15,
      categoria_id: categoria[10].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza mozzarella",
      producto_descripcion: "Ingredientes: Salsa de tomate, aceite de oliva, mozzarella y oregano",
      producto_precio: 100,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza 4 quesos",
      producto_descripcion: "Ingredientes: queso mozzarella, parmesano, roquefort y fontina",
      producto_precio: 150,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza fugazzeta",
      producto_descripcion: "Ingredientes: queso mozzarella, cebolla, aceite de oliva y oregano",
      producto_precio: 150,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza napolitana",
      producto_descripcion: "Ingredientes: queso mozzarella, tomates, aceite de oliva, albahaca y oregano",
      producto_precio: 110,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza calabresa",
      producto_descripcion: "Ingredientes: queso mozzarella y provolone, salsa de tomate, aceite de oliva, calbreza, aji picante",
      producto_precio: 150,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[1].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza mediterranea",
      producto_descripcion: "Ingredientes: queso mozzarella, salsa de tomate, aceite de oliva, jamón serrano, aceitunas negras y rúcula",
      producto_precio: 160,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[1].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza mexicana",
      producto_descripcion: "Ingredientes: queso mozzarella , salsa de tomate con tabasco, carne picada y palta",
      producto_precio: 200,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza hawaiana",
      producto_descripcion: "Ingredientes: queso mozzarella , salsa de tomate, piña, jamón crudo",
      producto_precio: 180,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Pizza con burrata y albahaca",
      producto_descripcion: "Ingredientes: burrata, salsa de tomate, alahaca y aceite de oliva",
      producto_precio: 140,
      producto_stock: 25,
      categoria_id: categoria[1].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Empanadas",
      producto_descripcion: "Empanadas hechos en casa. Sabores: carne, queso, jamon y queso, pollo, carne picante, cheeseburguer, choclo y queso",
      producto_precio: 120,
      producto_stock: 120,
      categoria_id: categoria[6].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Empanadas Vegetarianas",
      producto_descripcion: "Empanadas con queso hechos en casa. Sabores: Espinaca, cebolla, choclo",
      producto_precio: 140,
      producto_stock: 120,
      categoria_id: categoria[6].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Papas fritas",
      producto_descripcion: "papas fritas con sal",
      producto_precio: 40,
      producto_stock: 35,
      categoria_id: categoria[6].categoria_id,
      caracteristica_id: caracteristica[0].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Milanesa de carne",
      producto_descripcion: "Milanesa de carne de ternera",
      producto_precio: 80,
      producto_stock: 20,
      categoria_id: categoria[7].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Milanesa de pollo",
      producto_descripcion: "Milanesa de carne de Pollo (pata-muslo)",
      producto_precio: 70,
      producto_stock: 20,
      categoria_id: categoria[7].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Milanesa Napolitana",
      producto_descripcion: "Milanesa de carne de ternera con salsa de tomate, queso, huevo y especias",
      producto_precio: 100,
      producto_stock: 20,
      categoria_id: categoria[7].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
    {
      productos_id: uuidv4(),
      producto_nombre: "Sandwich de milanesa",
      producto_descripcion: "sandwich de miilanesa a eleccion(carne/pollo) que incluye queso parmesano, tomate, lechuga y huevo",
      producto_precio: 50,
      producto_stock: 50,
      categoria_id: categoria[7].categoria_id,
      caracteristica_id: caracteristica[2].caracteristica_id,
    },
  ];
}
