const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require("./routes/index.js");
// require("./db.js");
const server = express();

// server.name('API');

//sirve para recibimos datos de formularios
server.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());


server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  server.use('/', routes);
  
  server.use((err, req, res,next) => {
      const status = err.status || 500;
      const message = err.message || err;
      console.log(err)
      res.status(status).send(message);
  });
  
  module.exports = server;