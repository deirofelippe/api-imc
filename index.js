const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  let { altura, peso } = req.query;

  console.log("altura", altura);
  console.log("peso", peso);

  if (!(altura && peso)) {
    return res.json({ message: "Informe a altura e peso" }).status(422);
  }

  altura = parseFloat(altura.replace(",", "."));
  peso = parseFloat(peso.replace(",", "."));

  if (!(altura && peso)) {
    return res
      .json({ message: "Informe a altura e peso corretamente" })
      .status(422);
  }

  const imc = peso / (altura * altura);

  return res.json({ imc: imc.toFixed(2) }).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
