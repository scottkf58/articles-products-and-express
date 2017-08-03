const express = require('express');
const router = express.Router();
const articles = require('../db/articles.js');


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
    articles.editArticle(req.params.title, req.body);

    // res.json({
    //   'success' : true
    // });
  })
  .get( (req, res) => {
    var thisArticle = articles.getArticle(req.params.title);
    res.render('./articles/articles', thisArticle);
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
    var articleList = {
      articleList : articles.getAll()
    };
    res.render('./articles/index', articleList);
  })
  .post( (req, res) => {
    articles.add(req.body);
    // res.json({
    //   'success' : true
    // });
  });




module.exports = router;