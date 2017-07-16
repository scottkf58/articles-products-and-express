const express = require('express');
const router = express.Router();
const articles = require('../db/articles.js');

router.route( '/' )
  .get( ( req, res ) => {
    console.log( '/ get');
  } )
  .post( ( req, res ) => {
    console.log( '/ post');
  } );

router.route( '/:title' )
  .put( (req, res) => {
    console.log( '/:title put');

  })
  .get( (req, res) => {
    console.log( `${ req.params.title } get`);

  })
  .delete( (req, res) => {
    console.log( '/:title delete');

  });

router.get( '/:title/edit', (req, res) => {
  console.log( 'edit' );
} );

router.get( '/new', ( req, res ) => {
  console.log( 'new' );
} );

module.exports = router;