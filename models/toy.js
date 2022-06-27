import mongoose from 'mongoose'

const toysSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
})

const Toys = mongoose.model('Toys', toysSchema);

export default Toys