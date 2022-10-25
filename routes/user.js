var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  products = [
    {
      name: "Iphone 11",
      category: "Mobile",
      description: " Latest model from Apple",
      image:
        "https://d1eh9yux7w8iql.cloudfront.net/product_images/290060_374aef9d-24fa-4d24-bb8c-f27ce27b711f.jpg",
    },
    {
      name: "Iphone 12",
      category: "Mobile",
      description: " Latest model from Apple",
      image:
        "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg",
    },
    {
      name: "Pixel",
      category: "Mobile",
      description: " Latest model from Google",
      image:
        "https://lh3.googleusercontent.com/fPVwTGSf4NcAhnh111lrzbzRIoP-ZxKzDeHmfy3FHslyARSGrNK35uGiyIc8tm3JEYpM5sLvas27mVWVjO7EhL0L4o-VCdBToQ=rw-e365-w1050",
    },
    {
      name: "Samsung s10",
      category: "Mobile",
      description: " Latest model from Samsung",
      image:
        "https://media.wired.co.uk/photos/606d9c109a15f73a597a18d4/master/w_1600%2Cc_limit/s10-5.jpg",
    },
  ];

  res.render("./user/user", { products,admin:false});
});

module.exports = router;
