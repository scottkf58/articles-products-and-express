const collection = [];

function getArticleByTitle (title) {
  for(var i = 0; i < collection.length; i++) {
    if(title === collection[i].title) {
      return i;
    }
  }
return false;
}

function updateArticle () {

}

function addArticle () {

}

function deleteArticle () {

}

function getAll () {
  return collection;
}

function getArticle () {

}


module.exports = {
  getArticleByTitle: getArticleByTitle,
  updateArticle: updateArticle,
  addArticle: addArticle,
  deleteArticle: deleteArticle,
  getAll: getAll,
  getArticle: getArticle
};