const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },

    source: {
        type: String,
        min: 0,
        required: true        
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        require: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Stock' , stockSchema);