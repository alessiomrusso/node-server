const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true},
    password: String
});

// Create the model class
const model = mongoose.model('user', userSchema);

// Export the model
module.exports = model;