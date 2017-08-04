const pgp = require('pg-promise')();

// Object destructure
const {DATABASE, USER, PASSWORD} = require('../config/config.json');

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: DATABASE,
  user: USER,
  password: PASSWORD
};

const db = pgp(connectionOptions);

// Post request
function addArticle (newArt) {
  let tempArt = {
    title : newArt.title,
    body : newArt.body,
    author : newArt.author,
    urlTitle : encodeURI(newArt.title)
  };
  //collection.push(tempArt);
  return db.none( `INSERT INTO articles VALUES (default, ${tempArt.title}, ${tempArt.body}, ${tempArt.author}, ${tempArt.urlTitle})` );
}

// Get request
function getAllArticles () {
  return db.query('SELECT * FROM articles');
}

// Put request
function editArticle (title, obj) {
  collection.forEach( (element) => {
    if(element.title === title) {
      element.title = obj.title;
      element.body = obj.body;
      element.author = obj.author;
      element.urlTitle = obj.urlTitle;
      //console.log(element);
    }
  })
}

// Delete article
function deleteArticle (title) {
  collection.forEach( (element) => {
    if(title === element.title) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
    }
  })
}

// Get request
function getArticle (title) {
  var articleIndex = getArticleByTitle(title);
  return collection[articleIndex];
}


module.exports = {
  addArticle: addArticle,
  getAllArticles: getAllArticles,
  editArticle: editArticle,
  deleteArticle: deleteArticle,
  getArticle: getArticle
};