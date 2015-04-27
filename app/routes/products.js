import assign from 'lodash.assign';
import mongoose from 'mongoose';
let Product = mongoose.model('Product');

let load = (req, res, next, sku) => {
  Product.findOne({sku: sku}, (err, product) => {
    if(err) return next(err);
    if(!product) return next(new Error('not found'));
    req.product = product;
    next();
  });
};

let index = (req, res) => {
  Product.find()
    .sort({'createdAt': -1})
    .exec((err, products) => {
      res.json({products: products});
    });
};
// let new = (req, res) => {};
let create = (req, res) => {
  let product = new Product(req.body);

  product.save((err, product) => {
    res.json({product: product});
  })
};
// let edit = (req, res) => {};
let update = (req, res) => {
  let product = req.product;

  product = assign(product, req.body);

  product.save((err, product) => {
    res.json({product: product});
  })
};
let show = (req, res) => {
  let product = req.product;

  res.json({product: product});
};
let destroy = (req, res) => {
  let product = req.product;

  product.remove((err) => {
    if(!err) {
      res.json({result: 'Deleted product!'});
    } else {
      res.json({error: err.text});
    }
  })
};

export default {
  load,
  index,
  // new,
  create,
  // edit,
  update,
  show,
  destroy
}
