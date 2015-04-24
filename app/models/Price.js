import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PriceSchema = new Schema({
  type: { type: String, trim: true },
  value: Number
});

export default mongoose.model('Price', PriceSchema);
