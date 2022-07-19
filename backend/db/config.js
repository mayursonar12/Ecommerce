// This file can be required into index.js file to get the configuration of database

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/naturepulse");
