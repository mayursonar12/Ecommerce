// This file can be imported in index.js to get the 'user' schema

const mongoose = require('mongoose');
// Define schema for 'user' collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Export the mongoose model with its exact name
module.exports = mongoose.model("users", userSchema);

