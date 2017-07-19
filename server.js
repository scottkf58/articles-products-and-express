const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const articleRoute = require('./routes/articles.js');
const productRoute = require('./routes/products.js');
const articleDatabase = require( './db/articles.js' );
const productDatabase = require( './db/products.js' );


const app = express();

const hbs = exphbs.create( {
  defaultLayout : 'main',
  extname : 'hbs'
} );

app.engine( 'hbs', hbs.engine );
app.set( 'view engine', 'hbs' );


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/articles', articleRoute);
app.use('/products', productRoute);






const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});