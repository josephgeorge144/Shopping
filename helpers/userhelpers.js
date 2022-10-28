var db = require("../config/connection");
var collections = require("../config/collections");
const bcrypt = require('bcrypt');

module.exports={
    

doSignup: (userData) => {
    return new Promise((res, rej) => {
      return new Promise((res, rej) => {
        userData.Password=bcrypt.hash(userData.Password,10)
      
        res(userData.Password)
      }).then((data) =>{
        userData.Password=data;
        db.get().collection(collections.USER_COLLECTION).insertOne(userData )
        res(data)
        console.log(data);
      } );
    });

}}
