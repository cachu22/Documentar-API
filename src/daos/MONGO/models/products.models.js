import mongoose, { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsCollection = 'productos';

const productsSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  model: {
    type: String,
    index: true
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: [0]
  },
  thumbnails: {
    type: [String],
    default: []
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  stock: {
    type: Number,
    required: true,
    min: [0]
  },
  category: {
    type: String,
    index: true
  },
  availability: Boolean,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // default: 'admin'
    default: () => mongoose.Types.ObjectId('admin')
}
});

productsSchema.plugin(mongoosePaginate);

export const productModel = model(productsCollection, productsSchema);