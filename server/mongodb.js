const mongoose = require('mongoose');

const product = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  slogan: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  default_price: { type: Number, required: true },
});

const styles = new mongoose.Schema({
  id: { type: Number, unique: true },
  product_id: { type: Number, required: true },
  name: { type: Number, required: true },
  sale_price: { type: String, required: true },
  original_price: { type: String, required: true },
  default_style: { type: Boolean, required: true },
});

const related = new mongoose.Schema({
  id: { type: Number, unique: true },
  current_product_id: { type: Number, required: true },
  related_product_id: { type: Number, required: true },
});

const features = new mongoose.Schema({
  id: { type: Number, unique: true },
  product_id: { type: Number, required: true },
  feature: { type: String, required: true },
});

const photos = new mongoose.Schema({
  id: { type: Number, unique: true },
  styleId: { type: Number, required: true },
  url: { type: String, required: true },
  thumbnail_url: { type: String, required: true },
});

const skus = new mongoose.Schema({
  id: { type: Number, unique: true },
  styleId: { type: Number, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
});

mongoose.model('Product', product);
mongoose.model('Styles', styles);
mongoose.model('Related', related);
mongoose.model('Features', features);
mongoose.model('Photos', photos);
mongoose.model('Skus', skus);
