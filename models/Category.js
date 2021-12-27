/* const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const slug = require('slugify');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name:{
      type: String,
      unique:true,
      required:true
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

CategorySchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
    });
    next();
  });
  
  const Category = new mongoose.model('category', CategorySchema);
  
  module.exports = Category;  */
  