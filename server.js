const express = require('express');
const expbhs = require('express-handlebars');
const app = express();


const PORT = process.env.PORT || 3000;

const hbs = expbhs.create({
  extname: 'hbs',
  defaultLayout: 'main'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');




const server = app.listen(PORT, () => {
  console.log('Server running on ${PORT}');
})