const express = require("express");
const menu = require("./Menu");

const app = express();
const PORT = 3000;
app.get("/productos", (req, res) => {
  res.json(menu);
});

app.get("/producto/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  let menuEncontrado = menu.find((item) => {
    return item.id == id;
  });

  menuEncontrado ? res.json(menuEncontrado) : res.json("message: error");
});

app.use(express.json());
app.post("/producto", (req, res) => {
  const { id, nombre, descripcion, precio, categoria, observacion } = req.body;
  console.log(req.body);
  menu.push({ id : id, nombre: nombre, descripcion:descripcion, precio:precio, categoria:categoria, observacion:observacion });
  res.send(req.body);
});

app.listen(PORT);
console.log(`server listening on port ${PORT}`);
