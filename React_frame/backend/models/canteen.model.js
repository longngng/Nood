const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const canteenSchema = new Schema({
  canteenname: { type: String, required: true },
  description: { type: String},
  //description: { type: String, required: true },
  //duration: { type: Number, required: true },
  //date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Canteen = mongoose.model('Canteen', canteenSchema);

module.exports = Canteen;