const express = require('express');
const router = express.Router();

const productDb = require( './../db/products.js' );


router.get( '/new', ( req, res ) => {
  console.log( 'new' );
} );

router.get( '/:id/edit', (req, res) => {
} );

router.route( '/:id' )
  .put( (req, res) => {
    console.log( '/:id put');
    let isSuccessful = productDb.updateProduct( req.params.id, req.body );
    if( isSuccessful ){
      res.redirect( 200, `/products/${ req.params.id }` );
    } else {
      res.redirect( 400, `/products/${ req.params.id }/edit`);
    }
  })
  .get( (req, res) => {

    let productInfo = productDb.getProductById( req.params.id );
    res.render( 'products/product', productInfo );

  })
  .delete( (req, res) => {
    console.log( '/:id delete');
    let isSuccessful = productDb.deleteProduct( req.params.id );
    if( isSuccessful ){
      res.redirect( 200, `/products` );
    } else {
      res.redirect( 400, `/products/${ req.params.id }`);
    }
  });


router.route( '/' )
  .get( ( req, res ) => {
    console.log( '/ get');
    var products = {
      productList : productDb.getAllProducts()
    };
    res.render( './products/index', products );
  } )
  .post( ( req, res ) => {
    console.log( '/ post');
    let isSuccessful = productDb.addProduct( req.body );
    if( isSuccessful ){
      res.redirect( 200, './products' );
    } else {
      res.redirect( 400, './products/new' );
    }
  } );

module.exports = router;