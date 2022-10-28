var express = require("express");
var router = express.Router();
var productHelper = require("../helpers/producthelpers");
var mv = require('mv');

/* GET users listing. */
router.get("/", function (req, res, next) {
  
  productHelper.getProduct().then((data)=>{
    
  res.render("./admin/admintable", { data,admin:true});
})});


 


router.get("/addproduct", (req, res, next) => {
  res.render("./admin/addproduct");
});

router.post("/addproduct", (req, res, next) => {
  // console.log(req.body)

  productHelper.addProduct(req.body, (insertedId) => {
    let image = req.files.image;
    console.log( image)
     // for converting encrypted image data from re.files.image renaming into the name of  unique id we got from database and save
     // in folder inside public. thus we will have the access to these images for displaying on the websites in its different pages.
    image.mv('./public/dbimages/'+insertedId+'.jpg',(err,done)=>{
      if(!err){
        res.render("./admin/addproduct")
      }
      else{
        console.log(err);
      }
    })
  });

});

module.exports = router;
