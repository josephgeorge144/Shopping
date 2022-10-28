var db = require("../config/connection");
var product = require("../config/collections");

module.exports = {
  addProduct: (product, callback) => {
    //  console.log(product);
    db.get()
      .collection("product")
      .insertOne(product)
      .then((data) => {
        callback(data.insertedId);
      });
  },

  getProduct: () => {
    return new Promise((res, rej) => {
      return new Promise((res, rej) => {
        collproduct = db.get().collection(product.PRODUCT_COLLECTION).find().toArray();
        res(collproduct);
      }).then((data) =>{res(data)

        
      
      } );
    });
  },
};
