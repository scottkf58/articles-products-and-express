const express = require('express');
const router = express.Router();
const articles = require('../db/articles.js');


router.route('/')
  .get( (req, res) => {
    var articleList = {
      articleList : articles.getAll()
    };
    res.render( './articles/index', articleList);
  })
  .post( (req, res) => {
    articles.add(req.body);
    res.json({
      'success' : true
    });
  });


router.route('/:title')
  .put( (req, res) => {
    req.body.title = req.params.title;
    articles.editArticle(req.body);
    res.json({
      'success' : true
    });
  })
  .get( (req, res) => {
    //console.log(`${req.params.title} get`);
    req.body.title = req.params.title;
    articles.getArticle(req.body);
    res.json({
      'success' : true
    });
  })
  .delete( (req, res) => {
    //console.log('/:title delete');
    articles.deleteArticle(req.params.title);
    res.json({
      'success' : true
    });
  });


router.route('/:title/edit')
  .post( (req, res) => {
    req.body.title = req.params.title;
    articles.editArticle(req.body);
    res.json({
      'success' : true
    });
  })
  .get( (req, res) => {
    req.body.title = req.params.title;
    articles.getArticle(req.body);
    // Render??
  });


router.get('/new', (req, res) => {
  res.render('new');
});

module.exports = router;