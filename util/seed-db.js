require('babel-core/register');
var fs = require('fs');
var mongoose = require('mongoose');
var Product = require('../app/models/Product');
var db = require('../app/db');

var products = JSON.parse(fs.readFileSync('./rings-mongoified.json'));

var len = products.length;

db.once('open', function() {
  console.log('loading products');
  for(var i = 0; i < len; i++) {
    var product = new Product(products[i]);

    product.save();
  }
})
