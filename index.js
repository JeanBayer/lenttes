const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(6970, "192.168.162.48", () => {
    console.log('Servidor web iniciado');
  });

