const { Router } = require("express");

const router = new Router();

//aca van las rutas de los archivos de la carpera routes ej (const products = (require('./products'))

const productos = (require('./productos'))

router.use("/", productos)

module.exports = router;