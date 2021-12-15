const express = require('express');
//const { use, path } = require('express/lib/application');
const http = require('http');
const path = require('path')

const app = express();
app.use(express.static('public'));
const deneme = (req, res, next) => {
  console.log('zorroror');
  next();
};
app.use(deneme);
app.use(deneme);

const PORT = 3000;
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/gp1/index.html'));
});
app.listen(PORT, () => {
  console.log(`sunucu ${PORT} başlatıldı`);
});
