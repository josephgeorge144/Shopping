var express = require("express");
var router = express.Router();
var productHelper = require("../helpers/producthelpers");
var userHelper=require('../helpers/userhelpers')

/* GET home page. */
router.get("/", function (req, res, next) {
  productHelper.getProduct().then((data) => {
    res.render("./user/user", { data, admin: false });
  });
});

router.get("/login", (req, res) => {
  res.render("./user/login", { admin: false });
});
router.get("/login/signup", (req, res) => {
  res.render("./user/signup", { admin: false });
});

router.post("/", function (req, res, next) {
  productHelper.getProduct().then((data) => {
    // console.log(data)
    res.render("./user/user", { data, admin: false });
  });
});

router.post("/login", (req, res) => {

  
    userHelper.doSignup(req.body).then((data)=>{  
    console.log('workiongh');
    console.log(data);
    res.render("./user/login", { admin: false });
  })
});

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});








module.exports = router;
