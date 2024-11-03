// (1) import package mongo db
const mongoose = require('mongoose');

// (2) import konfiguration terkait mongoodb dari app/config/index.js
const { urlDb } = require('../config');

// (3) koneksi ke database
mongoose.connect(urlDb);

// (4) simpan koneksi dalam constans db

const db = mongoose.connection;

// (5) export db sipaya bisa digunakan o;eh file lain yang membutuhkan
module.exports = db;