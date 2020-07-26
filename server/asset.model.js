const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
    ticker: String,
    name: String,
    percent: Number,
    notes: String
});

module.exports = mongoose.model("assets", AssetSchema);