const collection = [
  {
    title: "thetitle",
    body: "thebody",
    author: "theAuthor",
    urlTitle: "thetitle"
  }
];


function getArticleByTitle (title) {
  for(var i = 0; i < collection.length; i++) {
    if(title === collection[i].title) {
      return i;
    }
  }
return false;
}

// Post request
function add (newArt) {
  let tempArt = {
    title : newArt.title,
    body : newArt.body,
    author : newArt.author,
    urlTitle : encodeURI(newArt.title)
  };
  collection.push(tempArt);
}

// Get request
function getAll () {
  return collection;
}

// Put request
function editArticle (title, obj) {
  collection.forEach( (element) => {
    if(element.title === title) {
      element.title = obj.title
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
  getArticleByTitle: getArticleByTitle,
  add: add,
  getAll: getAll,
  editArticle: editArticle,
  deleteArticle: deleteArticle,
  getArticle: getArticle
};