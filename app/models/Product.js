import mongoose from 'mongoose';
let Schema = mongoose.Schema;

import Price from './Price';
import lastModified from '../lib/lastModified';

let ProductSchema = new Schema({
  sku: String,
  vendor: String,
  name: String,
  description: String,
  images: [String],
  category: String,
  tags: [String],
  price: [Price],
  details: Schema.Types.Mixed
});

ProductSchema.plugin(lastModified);

export default mongoose.model('Product', ProductSchema);
