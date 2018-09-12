const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapInformationSchema = new Schema({
    shopName: {type: String, required: true },
    latitude: {type: Number, required: true },
    longitude: {type: Number, required: true },
    category: String
});

mongoose.model('mapInfo', mapInformationSchema);