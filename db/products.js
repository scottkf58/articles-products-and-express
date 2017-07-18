( function(){
  const productArray = [];
  var idNumber = 100;

  function addIdNumber(){
    return idNumber++;
  }

  function getProductIndexById( id ){
    let productIndex = null;

    for( var i = 0; i < productArray.length; i++ ){
      if( id === productArray[ i ].id ){
        productIndex = i;
        break;
      }
    }
    return productIndex;
  }


  function updateProduct( id ){

  }

  function addProduct( product ){
    product.id = addIdNumber();
    productArray.push( product );
    return product;
  }

  function deletProduct( id ){
    let targetProduct = 3;
  }

  function getAllProducts(){
    return productArray;
  }

  function getProductById( id ){
    let productIndex = getProductIndexById( id );
    return (  productIndex !== null ) ? productArray[ productIndex ] : productIndex;
  }


  module.exports = {
    getProductIndexById,
    updateProduct,
    addProduct,
    deletProduct,
    getAllProducts,
    getProductById
  };

} )();

