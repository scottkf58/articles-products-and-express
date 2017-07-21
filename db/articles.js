const collection = [
  {
  title: "newtitle",
  body: "new body",
  author: "The Author",
  urlTitle: "newtitle"
  }
];
var article;
var index;

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
  console.log(newArt);
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
function editArticle (obj) {
  collection.forEach( (element) => {
    if(element.title === obj.title) {
      element.body = obj.body;
      element.author = obj.author;
    }
  })
}

// Delete article
function deleteArticle (title) {
  collection.forEach( (element) => {
    if(title === element.title) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
    }
  })
}

// Get request
function getArticle (obj) {
  collection.forEach( (element) => {
    if(obj.params.title === element.title) {
      article = element;
    }
  })
}


module.exports = {
  getArticleByTitle: getArticleByTitle,
  add: add,
  getAll: getAll,
  editArticle: editArticle,
  deleteArticle: deleteArticle,
  getArticle: getArticle
};