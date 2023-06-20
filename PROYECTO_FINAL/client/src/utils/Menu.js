const Menu = [
  {
    nombre: "NYC Arancini",
    descripcion:
      "Bolitas de ‘risotto ai funghi’ rellenas de queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka (4pza)",
    precio: 139,
    categoria: "Entradas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Fried Ravioli",
    descripcion:
      "Ravioles hechos en casa, fritos, rellenos de cremoso dip de alcachofa (8pza)",
    precio: 139,
    categoria: "Entradas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Chicago Style Fried Calamari",
    descripcion:
      "Aros de calamar rebozados en masa de cerveza,acompañados con nuestra giardiniera casera (100g)",
    precio: 139,
    categoria: "Entradas",
    observacion: "",
  },
  {
    nombre: "Mozzarella Sticks",
    descripcion: "Crujientes dedos de queso mozzarella hechos en casa (5pza)",
    precio: 129,
    categoria: "Entradas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Cheesy Garlic Focaccia",
    descripcion:
      "Pan de masa esponjosa y aromatica relleno de una mezcla de queso monterrey jack y cheddar con capas de mantequilla de ajo cubierto con una costra de queso mozzarella, parmesano, manchego y finas hierbas",
    precio: 129,
    categoria: "Entradas",
    observacion: "",
  },
  {
    nombre: "Cesar",
    descripcion:
      "Corazón de Lechuga Romana aderezado con aderezo césar recién hecho acompañado de croutones y láminas de queso parmesano (220g)",
    precio: 119,
    categoria: "Ensaladas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Homeslice",
    descripcion:
      "Lechuga romana, tocino, chicken tenders, tomates cherry,queso mozzarella, aceitunas negras, aguacate con aderezo a elegir: César, Vinagreta Balsámica, Honey Mustard o Blue Cheese (450g)",
    precio: 150,
    categoria: "Ensaladas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Mediterranean",
    descripcion:
      "Pasta fusili con tomate cherry, cebolla morada, aceitunas negras,pimientos y queso mozzarella bañada en vinagreta balsámica (450g)",
    precio: 125,
    categoria: "Ensaladas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Pizza de peperoni",
    descripcion: "Queso mozzarella y doble pepperoni",
    precio: [
      { tamaño: 30, precio: 309 },
      { tamaño: 15, precio: 129 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza Vegetariana",
    descripcion: "pimiento rojo, cebolla,champiñones y aceitunas",
    precio: [
      { tamaño: 30, precio: 220 },
      { tamaño: 15, precio: 119 },
    ],
    categoria: "Pizzas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Pizza Xtreme Supreme",
    descripcion:
      "Pepperoni, salchicha italiana, champiñones, cebolla y pimiento verde",
    precio: [
      { tamaño: 30, precio: 350 },
      { tamaño: 15, precio: 200 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza Cheesy AF",
    descripcion: "queso cheddar,manchego,mozzarella y parmesano",
    precio: [
      { tamaño: 30, precio: 370 },
      { tamaño: 15, precio: 200 },
    ],
    categoria: "Pizzas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Pizza Meaty AF",
    descripcion: "Pepperoni, salchicha italiana y tocino",
    precio: [
      { tamaño: 30, precio: 430 },
      { tamaño: 15, precio: 250 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza Basic AF",
    descripcion: "jitomate cherry, albhaca y extra queso mozzarella",
    precio: [
      { tamaño: 30, precio: 300 },
      { tamaño: 15, precio: 150 },
    ],
    categoria: "Pizzas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Pizza Hawaiana",
    descripcion: "Extra tocino, piña y queso mozzarella",
    precio: [
      { tamaño: 30, precio: 350 },
      { tamaño: 15, precio: 180 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza Italiana",
    descripcion:
      "Deliciosa salsa boloñesa, queso crema y pasta lasagna con queso mozzarella",
    precio: [
      { tamaño: 30, precio: 380 },
      { tamaño: 15, precio: 190 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza Cochinita",
    descripcion:
      "Cochinita Pibil, mix de queso oaxaca y mozzarella, y cebolla morada",
    precio: [
      { tamaño: 30, precio: 350 },
      { tamaño: 15, precio: 180 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },
  {
    nombre: "Pizza al Pastor",
    descripcion:
      "Carne al Pastor, mix de queso oaxaca y mozzarella, adobo, piña, cilantro y cebolla",
    precio: [
      { tamaño: 30, precio: 350 },
      { tamaño: 15, precio: 190 },
    ],
    categoria: "Pizzas",
    observacion: "",
  },

  {
    nombre: "Pizza Spicy BBQ",
    descripcion:
      "Pollo a la plancha, salsa spicy bbq, queso cheddar,cebolla morada y perejil",
    precio: [
      { tamaño: 30, precio: 450 },
      { tamaño: 15, precio: 230 },
    ],
    categoria: "Pizzas",
    observacion: "Picante",
  },

  {
    nombre: "Pizza Buffalo",
    descripcion: "Chicken banados en salsa buffalo, aderezo blue cheese y apio",
    precio: [
      { tamaño: 30, precio: 430 },
      { tamaño: 15, precio: 220 },
    ],
    categoria: "Pizzas",
    observacion: "Picante",
  },
  {
    nombre: "Fettuccine",
    descripcion: "variedades para elegir: 4 Quesos,Pomodoro, Pesto",
    precio: 129,
    categoria: "Pastas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Ravioles de espinaca con queso (8pza)",
    descripcion: "variedades para elegir: 4 Quesos,Pomodoro, Salsa Vodka,Pesto",
    precio: 150,
    categoria: "Pastas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Ravioles Boloñesa (8pza)",
    descripcion: "variedades para elegir: 4 Quesos,Pomodoro, Salsa Vodka,Pesto",
    precio: 150,
    categoria: "Pastas",
    observacion: "",
  },
  {
    nombre: "Lasagna Bolognesa",
    descripcion: "Lasagna preparada con capas carne bolognesa, salsa pomodoro, bechamel de parmesano y queso mozzarella",
    precio: 280,
    categoria: "Pastas",
    observacion: "",
  },
  {
    nombre: "Lasagna Vegetariana",
    descripcion: "Lasagna preparada con calabaza, berenjena, zanahoria,champinon, espinaca y queso mozzarella",
    precio: 250,
    categoria: "Pastas",
    observacion: "Vegetariano",
  },
  {
    nombre: "Cheese Clazone",
    descripcion: "Nuestra masa de Pizza NY rellena de queso, salsa y tus ingredientes favoritos a elegir (pepperoni,tocino, salchicha italiana)",
    precio: 150,
    categoria: "Pastas",
    observacion: "",
  },
  {
    nombre: "Sweet Pretzels",
    descripcion: "Pretzels hechos de nuestra masa Ny bañados en salsa de tu elección ( nutella, D. de leche, o chocolate)",
    precio: 60,
    categoria: "Postres",
    observacion: "",
  },
  {
    nombre: "Cheesecake",
    descripcion: "Original Cheesecake estilo Nueva York servido con compota de zarzamora (200g)",
    precio: 90,
    categoria: "Postres",
    observacion: "",
  },
  {
    nombre: "Carrot Cake",
    descripcion: "Pastel de zanahoria hecho en casa cubierto con betún de queso crema y decorado con trozos de nuez.",
    precio: 100,
    categoria: "Postres",
    observacion: "",
  },
  {
    nombre: "Panque de Elote",
    descripcion: "Panque de elote casero con salsa de dulde de leche.",
    precio: 60,
    categoria: "Postres",
    observacion: "",
  },
  {
    nombre: "Frutilla",
    descripcion: ["Deslactosada", "Light"],
    precio: 95,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Frutilla",
    descripcion: ["Deslactosada", "Light"],
    precio: 95,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Vainilla",
    descripcion: ["Deslactosada", "Light"],
    precio: 95,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Chocolate",
    descripcion: ["Deslactosada", "Light"],
    precio: 95,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Oreo",
    descripcion: ["Deslactosada", "Light"],
    precio: 95,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Batido de Vino",
    descripcion: ["Deslactosada", "Light"],
    precio: 120,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Margarita Shake",
    descripcion: ["Deslactosada", "Light"],
    precio: 105,
    categoria: "Licuados",
    observacion: "",
  },
  {
    nombre: "Stout Frappe",
    descripcion: ["Deslactosada", "Light"],
    precio: 105,
    categoria: "Licuados",
    observacion: "",
  },
];

export default Menu;
