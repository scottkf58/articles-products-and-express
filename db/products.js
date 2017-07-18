( function(){
  const productArray = [];
  var idNumber = 0;

  function addIdNumber(){
    return idNumber++;
  }

  function getProductById( id ){
    let returnProduct = null;

    for( var i = 0; i < productArray.length; i++ ){
      let currentProduct = productArray[ i ];
      if( id === currentProduct.id ){
        returnProduct = currentProduct;
        break;
      }
    }
    return returnProduct;

  }

  function updateProduct( id ){

  }

  function addProduct( product ){
    product.id = addIdNumber();
    productArray.push( product );
    return product;
  }

  function deletProduct( id ){

  }

  function getAllProducts(){
    return productArray;
  }

  function getProduct( id ){

  }



  module.exports = {
    getProductById,
    updateProduct,
    addProduct,
    deletProduct,
    getAllProducts,
    getProduct
  };

} )();

