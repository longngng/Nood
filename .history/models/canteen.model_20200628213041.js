const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  user_id: {type: String},
  comment: {type: String},
  rating: {type: Number}
});

const canteenSchema = new Schema({
  name: {type: String, required : true},
  sig_dish: [String],
  desc: {type: String},
  rating: {type: Number, default: 0},
  rating_num: {type: Number, default: 0},
  review: [commentSchema],
  img_link: {type: String},
  to_id : {type: String, default: ''},
  campus: {type: String}
  //canteenname: { type: String, required: true },
  //description: { type: String},
  
  //description: { type: String, required: true },
  //duration: { type: Number, required: true },
  //date: { type: Date, required: true },
}, {
  timestamps: true,
});

canteenSchema.index({name: 'text', desc : 'text'});

const Canteen = mongoose.model('Canteen', canteenSchema);
//const Comment = mongoose.model('Comment', commentSchema);
module.exports = Canteen;