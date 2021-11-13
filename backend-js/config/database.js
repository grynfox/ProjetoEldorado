const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/eldoradoprime", { useNewUrlParser: true});

module.exports = mongoose;