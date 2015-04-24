import mongoose from 'mongoose';
let Product = mongoose.model('Product');

let load = (req, res, next, id) => {
  Product.findOne({_id: id}, (err, ring) => {
    if(err) return next(err);
    if(!ring) return next(new Error('not found'));
    req.product = product;
    next();
  });
};

let index = (req, res) => {
  Product.find()
    .sort({'createdAt': -1})
};
let new = (req, res) => {};
let create = (req, res) => {};
let edit = (req, res) => {};
let update = (req, res) => {};
let show = (req, res) => {};
let destroy = (req, res) => {};

export default {
  load,
  index,
  new,
  create,
  edit,
  update,
  show,
  destroy
}
