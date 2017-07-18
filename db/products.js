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

  function isProductDuplicate( { name } ){
    let isProductDuplicate = false;
    for( var i = 0; i < productArray.length; i++ ){
      if( name === productArray[ i ].name ){
        isProductDuplicate = true;
        break;
      }
    }
    return isProductDuplicate;
  }


  function updateProduct( productDetails ){
    let productIndex = getProductIndexById( productDetails.id );
    let isSuccessful = false;
    if( productIndex != null ){
      for( var key in productDetails ){
        productArray[ productIndex ][ key ] = productDetails[ key ];
      }
      isSuccessful = true;
    }
    return isSuccessful;
  }

  function addProduct( product ){
    let isNewProduct = !isProductDuplicate( product );
    if( isNewProduct ){
      product.id = addIdNumber();
      productArray.push( product );
      console.log( product );
    }
    return isNewProduct;
  }

  function deleteProduct( id ){
    let targetProductIndex = getProductIndexById( id );
    let isSuccessful = false;
    if( targetProductIndex !== null ){
      productArray.splice( targetProductIndex, 1 );
      isSuccessful = true;
    }
    return  isSuccessful;
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
    deleteProduct,
    getAllProducts,
    getProductById
  };

} )();

