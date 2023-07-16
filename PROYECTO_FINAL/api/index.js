const server = require("./src/app");
require("dotenv").config();

server.listen(process.env.PORT || 3001, async () => {
  console.log("%s listening at 3001");
});
