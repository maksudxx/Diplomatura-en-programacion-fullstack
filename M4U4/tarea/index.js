const express = require("express");
const menu = require("./Menu");

const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/productos", (req, res) => {
  res.json(menu);
});

app.get("/producto/:id", (req, res) => {
  const { id } = req.params;

  let menuEncontrado = menu.find((item) => {
    return item.id == id;
  });

  menuEncontrado ? res.json(menuEncontrado) : res.json("message: error");
});

app.post("/producto", (req, res) => {
  const { id, nombre, descripcion, precio, categoria, observacion } = req.body;
  console.log(req.body);
  menu.push({
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    categoria: categoria,
    observacion: observacion,
  });
  res.send(req.body);
});

//TAREA UNIDAD 4 (podia agregarlo en la ruta productos que esta arriba pero lo hice aca abajo para que se diferencien las tareas)

app.get("/categorias", (req, res) => {
  const { categoria } = req.query;
  let filtrado = menu.filter((m) => {
    return m.categoria == categoria;
  });

  res.json(filtrado);
});

app.listen(PORT);
console.log(`server listening on port ${PORT}`);
