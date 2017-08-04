const express = require('express');
const router = express.Router();
const articles = require('../db/database.js');


router.get('/new', (req, res) => {
  console.log('new route');
  res.render('./articles/new');
});


router.route('/:title/edit')
  .get( (req, res) => {
    var editArticle = articles.getArticle(req.params.title);
    res.render('./articles/edit', editArticle);
  });

router.route('/:title')
  .put( (req, res) => {
    //console.log('Put request');
    articles.editArticle(req.params.title, req.body)
      .then(() => {

      })
      .catch((err) => {
        res.json({
        'success' : true
      });
    });

  })
  .get( (req, res) => {
    articles.getArticle(req.params.title)
      .then((data) => {
        console.log(data);
        res.render('../views/articles/articles', data);
      })
      .catch((err) => {
        console.log( 'erroring');
        console.log(err);
      });
    // res.json({
    //   'success' : true
    // });
  })
  .delete( (req, res) => {
    articles.deleteArticle(req.params.title);
    // res.json({
    //   'success' : true
    // });
  });


router.route('/')
  .get( (req, res) => {
    articles.getAllArticles()
      .then((data)=> {
/*        console.log( data );*/

        res.render('../views/articles/index', {data});

      })
      .catch((err) => {
        console.log( err );
      });
    /*var articleList = {
      articleList : articles.getAllArticles()
    };
    console.log( articles.getAllArticles());*/
  })
  .post( (req, res) => {
    articles.addArticle(req.body)
      .then(() => {
      res.redirect( 200, './articles' );
      })
      .catch((err) => {
        console.log( err );
        res.redirect( 400, './articles/new' );
      });
  });




module.exports = router;