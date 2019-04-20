var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/cart.ejs', function(req, res, next) {
  res.render('cart');
});


router.get('/checkout.ejs', function(req, res, next) {
  res.render('checkout');
});

router.get('/contact.ejs', function(req, res, next) {
  res.render('contact');
});

router.get('/product_details', function(req, res, next) {
  res.render('product');
});

router.get('/products.ejs', function(req, res, next) {
  res.render('products');
});

router.get('/register.ejs', function(req, res, next) {
  res.render('register');
});

module.exports = router;
