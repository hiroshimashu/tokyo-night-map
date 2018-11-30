const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    instagramId: String
})

mongoose.model('users', userSchema);