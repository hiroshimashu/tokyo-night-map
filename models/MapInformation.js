const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapInformationSchema = new Schema({
    shopName: String,
    latitude: Number,
    longitude: Number,
    category: String
});

mongoose.model('mapInfo', mapInformationSchema);