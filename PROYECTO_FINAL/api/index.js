const server = require("./src/app");
require("dotenv").config();
const { conn, Rol} = require("./src/db.js");
const {PORT} = process.env
conn.sync({force: true}).then(()=>{
  server.listen(PORT || 3001, async () => {
    console.log(`listening server on port ${PORT}`);
  });
})
