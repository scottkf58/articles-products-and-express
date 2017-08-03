const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const articleRoute = require('./routes/articles.js');
const productRoute = require('./routes/products.js');
const articleDatabase = require('./db/articles.js');
const productDatabase = require('./db/products.js');


const app = express();
const hbs = exphbs.create( {
  defaultLayout : 'main',
  extname : 'hbs'
});

app.engine( 'hbs', hbs.engine );
app.set( 'view engine', 'hbs' );

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(methodOverride(function (req, res) {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    // Look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/articles', articleRoute);
app.use('/products', productRoute);


const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});