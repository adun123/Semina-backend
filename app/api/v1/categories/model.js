const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let categorySchema = Schema(
    {
        name: {
            type: String,
            minlength : [3,'Panjang nama kategori minimal 3 karakter'],
            maxlength : [28,'Panjang nama kategori maksimal 28 karakter'],
            required : [true,'nama kategori harus diisi'],
        }        
    },
    {
        timestamps: true,
    }
);

module.exports = model('Category', categorySchema);