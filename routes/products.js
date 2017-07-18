const express = require('express');
const router = express.Router();

const productDb = require( './../db/products.js' );

router.route( '/' )
  .get( ( req, res ) => {
    console.log( '/ get');
  } )
  .post( ( req, res ) => {
    console.log( '/ post');
    productDb.addProduct( req.body );
    res.send( { success: true } );
  } );

router.route( '/:id' )
  .put( (req, res) => {
    console.log( '/:id put');

  })
  .get( (req, res) => {
    console.log( `${ req.params.id } get`);

  })
  .delete( (req, res) => {
    console.log( '/:id delete');

  });

router.get( '/:id/edit', (req, res) => {
  console.log( 'edit' );
} );

router.get( '/new', ( req, res ) => {
  console.log( 'new' );
} );

module.exports = router;