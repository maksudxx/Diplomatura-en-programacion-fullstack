const { Router } = require("express");

const router = Router();

router.get("/productos", (req, res) => {
  res.json("HOLAAAAAAAAAAAAAAA");
});
module.exports = router;
