const mongoose = require('mongoose');

const {model , Schema} = mongoose;

let imagesSchema = Schema(
    {
        name : {type: String},
    },
    {timestmaps: true}
    
);

mobile.exports = model('Image', imagesSchema);