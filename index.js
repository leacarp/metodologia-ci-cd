const express = require('express');
const app = express();
const port = 3000;

// Primer endpoint GET
app.get('/mensaje1', (req, res) => {
  res.send('Hola desde el primer endpoint');
});

// Segundo endpoint GET
app.get('/mensaje2', (req, res) => {
  res.send('Hola desde el segundo endpoint');
});

app.get('/mensaje3', (req, res) => {
    res.send('Hola desde el tercer endpoint...');
  });

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
